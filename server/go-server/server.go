package main

import (
	"database/sql"
	"fmt"
	"go-server/graph"
	"go-server/graph/resolvers"
	"log"
	"net/http"
	"os"

	"github.com/gocolly/colly"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
	_ "github.com/lib/pq" // Import the PostgreSQL driver
)

const defaultPort = "8080"

type Product struct {
	Name  string
	Stars string
	Price string
}

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = defaultPort
	}

	products := []Product{}
	/*move somewhere else */
	c := colly.NewCollector(colly.AllowedDomains("www.amazon.ca"))

	c.OnRequest(func(r *colly.Request) {
		fmt.Println("Link of the page:", r.URL)
	})

	c.OnResponse(func(r *colly.Response) {
		fmt.Println("Got a response from", r.Request.URL)

	})

	c.OnHTML("div.s-result-list.s-search-results.sg-row", func(h *colly.HTMLElement) {
		h.ForEach("div.a-section.a-spacing-base", func(_ int, h *colly.HTMLElement) {

			product := Product{}
			product.Name = h.ChildText("span.a-size-base-plus.a-color-base.a-text-normal")
			product.Stars = h.ChildText("span.a-icon-alt")
			product.Price = h.ChildText("span.a-price-whole")

			fmt.Println("ProductName: ", product.Name)
			fmt.Println("Ratings: ", product.Stars)
			fmt.Println("Price: ", product.Price)

			/*
				_, err := db.Exec("INSERT INTO products (name, stars, price) VALUES ($1, $2, $3)",
				product.Name, product.Stars, product.Price)
				if err != nil {
					log.Println("Error inserting product into the database:", err)
				}
			*/
			products = append(products, product)

		})
	})

	c.OnScraped(func(r *colly.Response) {
		fmt.Println("Finished", r.Request.URL)
	})

	c.Visit("https://www.amazon.ca/s?k=keyboard")

	/*move somewhere else */

	// Connect to the PostgreSQL database

	connectionString := "user=postgres dbname=postgres password=123456 host=localhost port=32775  sslmode=disable"
	db, err := sql.Open("postgres", connectionString)
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	srv := handler.NewDefaultServer(graph.NewExecutableSchema(graph.Config{
		Resolvers: &resolvers.Resolver{
			DB: db,
		},
	}))

	// Apply CORS middleware to handle all routes
	corsOptions := handlers.AllowedOrigins([]string{"https://studio.apollographql.com", "http://localhost:3000"})
	corsMiddleware := handlers.CORS(
		corsOptions,
		handlers.AllowedMethods([]string{"GET", "POST", "OPTIONS"}),
		handlers.AllowedHeaders([]string{"Content-Type"}),
		handlers.AllowCredentials(),
	)

	// Create a new mux router and apply the CORS middleware
	router := mux.NewRouter()
	router.Use(corsMiddleware)

	// Define routes using the mux router
	router.Handle("/query", srv)

	log.Printf("connect to http://localhost:%s/ for GraphQL playground", port)
	log.Fatal(http.ListenAndServe(":"+port, router)) // Use the router for serving

}

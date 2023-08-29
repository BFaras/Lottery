package main

import (
	"database/sql"
	"go-server/graph"
	"go-server/graph/resolvers"
	"log"
	"net/http"
	"os"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
	_ "github.com/lib/pq" // Import the PostgreSQL driver
)

const defaultPort = "8080"

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = defaultPort
	}

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

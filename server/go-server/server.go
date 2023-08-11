package main

import (
	"go-server/graph"
	"log"
	"net/http"
	"os"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
)

const defaultPort = "8080"

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = defaultPort
	}

	srv := handler.NewDefaultServer(graph.NewExecutableSchema(graph.Config{Resolvers: &graph.Resolver{}}))

	// Apply CORS middleware to handle all routes
	corsOptions := handlers.AllowedOrigins([]string{"https://studio.apollographql.com"})
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

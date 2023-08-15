package resolvers

import (
	"database/sql"
)

// Resolver implements the GraphQL resolver functions
type Resolver struct {
	DB *sql.DB // Database connection
}

/*
// This file will not be regenerated automatically.
//
// It serves as dependency injection for your app, add any dependencies you require here.


// Query returns graph.QueryResolver implementation.
func (r *Resolver) Query() graph.QueryResolver { return &QueryResolver{r} }

type QueryResolver struct{ *Resolver }
*/

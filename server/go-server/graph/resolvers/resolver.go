package resolvers

// This file will not be regenerated automatically.
//
// It serves as dependency injection for your app, add any dependencies you require here.

import (
	"go-server/graph"
)

type Resolver struct{}

// Query returns graph.QueryResolver implementation.
func (r *Resolver) Query() graph.QueryResolver { return &QueryResolver{r} }

type QueryResolver struct{ *Resolver }

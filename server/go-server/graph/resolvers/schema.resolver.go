package resolvers

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.
// Code generated by github.com/99designs/gqlgen version v0.17.36

import (
	"context"
	"fmt"
	"go-server/graph"
	"go-server/graph/model"
)

// CreateUserCart is the resolver for the createUserCart field.
func (r *mutationResolver) CreateUserCart(ctx context.Context, userCart model.UserCartInput) (*model.UserCart, error) {
	insertStatement := `
	INSERT INTO lottery.UserCart (UserID, Username, Password, DateOfBirth, Age, Email, CartNumber)
	VALUES ($1, $2, $3, $4, $5, $6, $7)
	RETURNING UserID, Username, Password, DateOfBirth, Age, Email, CartNumber
    `
	// Execute the insert statement
	var insertedUserCart model.UserCart
	err := r.DB.QueryRow(
		insertStatement,
		userCart.UserID,
		userCart.Username,
		userCart.Password,
		userCart.DateOfBirth,
		userCart.Age,
		userCart.Email,
		userCart.CartNumber,
	).Scan(
		&insertedUserCart.UserID,
		&insertedUserCart.Username,
		&insertedUserCart.Password,
		&insertedUserCart.DateOfBirth,
		&insertedUserCart.Age,
		&insertedUserCart.Email,
		&insertedUserCart.CartNumber,
	)
	if err != nil {
		return nil, err
	}

	return &insertedUserCart, nil
}

// GetUserCart is the resolver for the getUserCart field.
func (r *queryResolver) GetUserCart(ctx context.Context, username string, password string) (*model.UserCart, error) {
	fmt.Println(username, password)
	row := r.DB.QueryRow("SELECT * FROM lottery.UserCart WHERE UserName =$1 and Password =$2", username, password)
	fmt.Println(row)
	var userCart model.UserCart
	err := row.Scan(&userCart.UserID, &userCart.Username, &userCart.Password, &userCart.DateOfBirth, &userCart.Age, &userCart.Email, &userCart.CartNumber)
	if err != nil {
		fmt.Println(err)
		return nil, err
	}

	return &userCart, nil
}

// Mutation returns graph.MutationResolver implementation.
func (r *Resolver) Mutation() graph.MutationResolver { return &mutationResolver{r} }

// Query returns graph.QueryResolver implementation.
func (r *Resolver) Query() graph.QueryResolver { return &queryResolver{r} }

type mutationResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }

// Code generated by github.com/99designs/gqlgen, DO NOT EDIT.

package model

type UserCart struct {
	UserID      string  `json:"UserId"`
	Username    *string `json:"Username,omitempty"`
	Password    *string `json:"Password,omitempty"`
	DateOfBirth *string `json:"DateOfBirth,omitempty"`
	Age         *int    `json:"Age,omitempty"`
	Email       *string `json:"Email,omitempty"`
	CartNumber  *int    `json:"CartNumber,omitempty"`
}
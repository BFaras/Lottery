CREATE SCHEMA lottery;

CREATE TABLE lottery.UserCart (
    UserId UUID PRIMARY KEY,
    Username VARCHAR,
    Password VARCHAR,
    DateOfBirth VARCHAR,
    Age INTEGER,
    Email VARCHAR,
    CartNumber SERIAL 
);

CREATE TABLE lottery.BalanceAccount (
    AccountNumber SERIAL PRIMARY KEY,
	UserCartId UUID REFERENCES lottery.UserCart(UserId),
    AccountType VARCHAR,
    Dollars INTEGER
);

CREATE TABLE lottery.Prize (
    PrizeID UUID PRIMARY KEY,
    NameOfPrize VARCHAR,
    NumberLeft INTEGER,
	Rating INTEGER
);

CREATE TABLE lottery.Ticket (
    TicketId SERIAL PRIMARY KEY,
    AccountNumber INTEGER, 
    OddsOfWinning INTEGER,
    UserCartId UUID REFERENCES lottery.UserCart(UserId),
    PrizeId UUID REFERENCES lottery.Prize(PrizeID)
);

/*
-- Insert data into UserCart table
INSERT INTO lottery.UserCart (UserId, Username, Password, DateOfBirth, Age, Email, CartNumber)
VALUES
  ('550e8400-e29b-41d4-a716-446655440000', 'JohnDoe', 'password123', '1990-05-15', 31, 'john.doe@example.com', DEFAULT);

-- Insert data into BalanceAccount table
INSERT INTO lottery.BalanceAccount (UserCartId, AccountType, Dollars)
VALUES
  ('550e8400-e29b-41d4-a716-446655440000', 'Savings', 1000),
  ('550e8400-e29b-41d4-a716-446655440000', 'Checking', 500);

-- Insert data into Prize table
INSERT INTO lottery.Prize (PrizeID, NameOfPrize, NumberLeft, Rating)
VALUES
  ('550e8400-e29b-41d4-a716-446655440001', 'Free Gift', 10, 4),
  ('550e8400-e29b-41d4-a716-446655440002', 'Discount Coupon', 5, 5);

-- Insert data into Ticket table
INSERT INTO lottery.Ticket (AccountNumber, OddsOfWinning, UserCartId, PrizeId)
VALUES
  (1, 5, '550e8400-e29b-41d4-a716-446655440000', '550e8400-e29b-41d4-a716-446655440001'),
  (2, 8, '550e8400-e29b-41d4-a716-446655440000', '550e8400-e29b-41d4-a716-446655440002');*/
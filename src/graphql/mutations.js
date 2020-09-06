/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const addTodo = /* GraphQL */ `
  mutation AddTodo(
    $id: ID!
    $name: String
    $description: String
    $priority: Int
  ) {
    addTodo(
      id: $id
      name: $name
      description: $description
      priority: $priority
    ) {
      id
      name
      description
      priority
    }
  }
`;

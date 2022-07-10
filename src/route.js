import React from "react";
import { Switch, Route } from "react-router-dom";
//Here is page
import HomePage from "./pages/homepage";
import Create from "./pages/create";
import TodoList from "./todoList";

export default function MyRoutes() {
    return (
        <Switch>
            <Route exact path="/" component={(props) => <HomePage {...props} />} />
            <Route path="/create" component={(props) => <Create {...props} />} />
            <Route path="/todo-list" component={(props) => <TodoList {...props} />} />
        </Switch>
    )
}
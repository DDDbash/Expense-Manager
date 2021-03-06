import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import EditExpense from "../components/EditExpense";
import NotFoundPage from "../components/NotFoundPage";
import AddExpense from "../components/AddExpense";
import Header from "../components/Header";

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true} />
                <Route path="/create" component={AddExpense} />
                <Route path="/edit/:id" component={EditExpense} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;

import React from "react";
import { Formik, Field, Form } from "formik";

function InfoForm({ onSubmit }) {
    return (
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            bankBalance: "",
            payFrequency: "",
            payAmount: "",
            expenseName: "",
            expenseAmount: "",
            expenseFrequency: "",
            savingGoal: "",
            savingAmount: "" 
          }}
          onSubmit={(values) => {
            // Handle form submission
            onSubmit(values);
          }}
        >
          {formik => (
            <form onSubmit={formik.handleSubmit} className="form-box">
              <Field type="text" name="firstName" placeholder="First Name" />
              <Field type="text" name="lastName" placeholder="Last Name" />
              <Field type="text" name="bankBalance" placeholder="Bank Balance" />
              <Field type="text" name="payFrequency" placeholder="Pay Frequency" />
              <Field type="text" name="payAmount" placeholder="Pay Amount" />
              <Field type="text" name="expenseName" placeholder="Expense Name" />
              <Field type="text" name="expenseAmount" placeholder="Expense Amount" />
              <Field type="text" name="expenseFrequency" placeholder="Expense Frequency" />
              <Field type="text" name="savingGoal" placeholder="Saving Goal" />
              <Field type="text" name="savingAmount" placeholder="Saving Amount" />
              <button type="submit">Submit</button>
            </form>
          )}
        </Formik>
      );
    };

export default InfoForm;
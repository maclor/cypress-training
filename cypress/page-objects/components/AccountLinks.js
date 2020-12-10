export default class AccountLinks {
    static clickAccountSummary() {
        cy.get('#account_summary_tab').click();
    }

    static clickAccountActivity() {
        cy.get('#account_activity_tab').click();
    }

    static clickTransferFounds() {
        cy.get('#transfer_funds_tab').click();
    }

    static clickPayBills() {
        cy.get('#pay_bills_tab').click();
    }

    static clickMyMoneyMap() {
        cy.get('#money_map_tab').click();
    }

    static clickOnlineStatements() {
        cy.get('#online_statements_tab').click();
    }
}
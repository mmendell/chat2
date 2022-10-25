Feature: Show hide event details

Scenario: elements are collapsed by default
Given event element on page is collapsed
When user opens up app
Then event element is collapsed by default

Scenario: User expands element to view details
Given event list has rendered into the app
When the user clicks an event details button
Then event element expands and shows all event details

Scenario Outline: user can collapse event details
Given event element is showing specific event details
When the user click hide details
Then event details become hidden

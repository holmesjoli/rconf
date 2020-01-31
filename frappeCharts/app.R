# shiny-typing-01/app.R

library(shiny)
library(htmltools)


typing_speed_input <- function(inputId, label, placeholder = NULL, ...) {
  
  htmltools::div(
    class = "form-group typing-speed",
    tags$label(class = "control-label", `for` = inputId, label = label),
    tags$textarea(id = inputId, class = "form-control", placeholder = placeholder)
  )

}

ui <- fluidPage(
  typing_speed_input("typing", "Type here..."),
  verbatimTextOutput("debug")
)

server <- function(input, output, session) {
  output$debug <- renderPrint(input$typing)
}

shinyApp(ui, server)
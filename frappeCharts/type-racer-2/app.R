library(shiny)

typingSpeedInput <- function(inputId, label, placeholder = NULL) {
  div(
    class = "form-group typing-speed",
    tags$label(class = "control-label", `for` = inputId),
    tags$textarea(id = inputId, class = "form-control", placeholder = placeholder),
    htmltools::htmlDependency(
      name = "typing-speed",
      version = "0.0.1",
      src = ".",
      script = "typing.js",
      all_files = FALSE
    )
  )
}

ui <- fluidPage(
  # textAreaInput("typing", "Type here..."),
  typingSpeedInput("typing", "Type here..."),
  verbatimTextOutput("debug")
)

server <- function(input, output, session) {
  output$debug <- renderPrint(input$typing)
}

shinyApp(ui, server)

drumkitUI <- function(id,
                      width = "400px",
                      height = "400px") {
  
  ns <- NS(id)
  
  dumkit_id = ns("drumkit")
  
  shiny::tagList(
    htmltools::htmlTemplate("drumkit.svg",
                            id = glue::glue('id = "{drumkit_id}"'),
                            width = glue::glue('width = "{width}"'),
                            height = glue::glue('height = "{height}"'))
  )
  
}

ui <- fluidPage(
  drumkitUI("drums")
)

server <- function(input, output, session, ...) {
  
}

shiny::shinyApp(ui, server)
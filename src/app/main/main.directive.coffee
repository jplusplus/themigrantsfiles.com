angular.module "tmf"
  .directive "main", ->
    restrict: 'C'
    link: (scope, element)->
      # For each responsive iframe
      element.find("[data-iframe]").each (i, iframe)->
        # Initialize once
        unless $(iframe).data 'pym'
          # Get the configuration
          url = $(iframe).data "url"
          id  = $(iframe).attr "id"
          # Instancate PYM
          $(iframe).data 'pym', new pym.Parent id, url, {}



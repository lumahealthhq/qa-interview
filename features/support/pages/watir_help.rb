module Features
  module Helpers
    class Watir
      class << self
        attr_reader :browser

        def start
          start_browser
        end

        def stop
          browser.close
        end

        private

        def start_browser
          @driver = Selenium::WebDriver.for(:chrome)
          @browser ||= ::Watir::Browser.new(@driver)
        end
      end
    end
  end
end

require 'watir'

AfterConfiguration do
  Features::Helpers::Watir.start
end

World do
  Object.new.tap do |world|
    world.extend CucumberHelper
  end
end

# Generated by cucumber-sinatra. (2014-12-11 11:13:06 -0600)

ENV['RACK_ENV'] = 'test'

require File.join(File.dirname(__FILE__), '..', '..', 'overlord.rb')

require 'capybara'
require 'capybara/cucumber'
require 'rspec'
require 'capybara/poltergeist'

Capybara.app = Lair

class LairWorld
  include Capybara::DSL
  include RSpec::Expectations
  include RSpec::Matchers
end

World do
  LairWorld.new
end

Capybara.default_driver = :poltergeist
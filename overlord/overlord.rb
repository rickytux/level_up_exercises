# run `ruby overlord.rb` to run a webserver for this app

require 'sinatra'
class Lair < Sinatra::Base
  configure(:development) { set :session_secret, 'something' }
  enable :sessions
  get '/' do
    erb :index
  end

  post '/form' do
    "wrong"
  end

  # we can shove stuff into the session cookie YAY!
  def start_time
    session[:start_time] ||= (Time.now).to_s
  end
end

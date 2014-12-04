# run `ruby overlord.rb` to run a webserver for this app

require 'sinatra'

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

def bomb_start
  session[:countdown_end] ||= (Time.now + 10).to_s
end

def bomb_stop
  session.delete(:countdown_end)
end

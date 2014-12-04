# run `ruby overlord.rb` to run a webserver for this app

require 'sinatra'

enable :sessions

get '/' do
  erb :index
end

post '/form' do
  if params[:message] == "1234"
    if session[:status] == 1
      session[:status] = 0
    else
      session[:status] = 1
    end
    redirect '/'
  else
    erb :wrong_code
    sleep 2
    redirect '/'
  end
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

class HomeController < ApplicationController

    require 'rest-client'

    def index
        # query = "love"
        # query = params[:q] if !params[:q].nil?
        # giphy_key = "iMzW2Do85luc5nuegflBS52b1vcxGITE";
        # url = "https://api.giphy.com/v1/gifs/search?api_key=#{giphy_key}&q=#{query}&limit=12&offset=0&rating=g&lang=en"
        # # @data = JSON.parse(open(url).read)

        # @response = RestClient.get url
        # byebug
    end

    def dream
        @nama = "Bagus Tambunan"
        @nama = (1..20).to_a
    end
end

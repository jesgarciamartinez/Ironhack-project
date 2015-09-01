class PagesController < ApplicationController
    before_action :authenticate_user!, only: [:profile, :tracks]

    def index
        unless user_signed_in?
            render 'pages/cover'
        else
            @tracks = Track.where(user_id: current_user).order('id DESC')
            render 'pages/tracks'
        end
        #render 'pages/index' lo hace por defecto
    end


    def profile
        @user = current_user
        render 'pages/profile'
    end


    def tracks
    end
end




#redirect -> url completa (por definicion del protocol http)
#link_to -> path
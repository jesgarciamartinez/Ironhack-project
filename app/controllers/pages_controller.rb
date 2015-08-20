class PagesController < ApplicationController
    before_action :authenticate_user!, only: [:user_profile, :user_tracks]

    def index

        #render 'pages/index' lo hace por defecto
    end

    def user_profile
    end

    def user_tracks
    end
end




#redirect -> url completa (por definicion del protocol http)
#link_to -> path
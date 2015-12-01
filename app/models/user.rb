class User < ActiveRecord::Base
  include Clearance::User

	has_many :settings
	has_many :websites
end

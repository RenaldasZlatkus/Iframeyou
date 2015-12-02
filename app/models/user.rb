class User < ActiveRecord::Base
	has_one :setting
	has_many :websites

    validates :email, uniqueness: true
	validates :password, length: { in: 4..20 }
	#validates_presence_of :password, on: :create
end

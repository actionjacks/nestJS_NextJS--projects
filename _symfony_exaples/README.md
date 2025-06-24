mkdir -p config/jwt
# Generate private key (remember strong password!)
openssl genrsa -out config/jwt/private.pem -aes256 4096
# Generate public key
openssl rsa -pubout -in config/jwt/private.pem -out config/jwt/public.pem
# in .env add line
JWT_PASSPHRASE=TwojeBardzoSilneHasloDoKlucza
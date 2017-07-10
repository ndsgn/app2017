import hashlib
ADMIN_HASH = hashlib.sha224("/*email&password*/").hexdigest()
ADMIN_USERS = ['{"email":"email","senha":"password"}', ]
ADMIN_RESPONSE = '[{"Action":"Redir_Admin","Redir":"\/dashboard", "Admin_Hash":"' + ADMIN_HASH + '" }]'
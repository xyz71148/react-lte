if test -f "/usr/local/bin/ossutil"; then
  echo "/usr/local/bin/ossutil exists"
else
    curl -o /usr/local/bin/ossutil http://gosspublic.alicdn.com/ossutil/1.6.12/ossutilmac64
    chmod +x /usr/local/bin/ossutil
fi
#https://help.aliyun.com/document_detail/120057.html?spm=a2c4g.11186623.6.714.5d2a2e69ICTAy0
ossutil -e oss-cn-shanghai.aliyuncs.com -i $OSS_ID -k $OSS_KEY cp -rf ./www oss://pt-pub/static/i-front

<?php
    class General{
        public $tag = 'videos';
        public $codea='3106448811.ab3366d.c8cb14053a074b0399c1c85ec791573a';
        public $client_id="ab3366d4402245ac9da6ccc519c62a98";
        public $urlCount=''; // https://api.instagram.com/v1/tags/'.$tag.'?access_token=.$codea
        public $url=''; //https://api.instagram.com/v1/tags/'.$tag.'/media/recent?access_token='.$codea
        
        function callInstagram($url){
            $ch = curl_init();
            curl_setopt_array($ch, array(CURLOPT_URL => $this->url,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_SSL_VERIFYPEER => false,
            CURLOPT_SSL_VERIFYHOST => 2
            ));
            $result = curl_exec($ch);
            curl_close($ch);
            return $result;
        }
        
        function llamaDatos(){
            $this->urlCount='https://api.instagram.com/v1/tags/'.$this->tag.'?access_token='.$this->codea;
            $this->url='https://api.instagram.com/v1/tags/'.$this->tag.'/media/recent?access_token='.$this->codea;
            $inst_stream = $this->callInstagram($this->url);
            $inst_streamC = $this->callInstagram($this->urlCount);
            $results = json_decode($inst_stream, true);
            $videoejemplo='';
            $videoejemploss='';
            $imgpre='';
            //recorrer respuesta de instagram
            for ($i = 0; $i < count($results['data']); $i++) {
                //si el contenido actual es de tipo video
                if ($results['data'][$i]['type']=='video') {
                    $insta = DB_DataObject::Factory('Rexr_instagram');
                  DB_DataObject::debugLevel(0);
                    $insta->link=$results['data'][$i]['link'];
                    $find=$insta->find();
                    //si ya existe este contenido en la db
                    if ($find<1) {
                       //$insta->img_low_resolution=$results['data'][$i]['images']['standard_resolution']['url'];
                       // $videoejemplo=$results['data'][$i]['videos']['low_resolution']['url'];//standard_resolution
                       //$insta->low_resolution=$results['data'][$i]['videos']['standard_resolution']['url'];//standard_resolution
                       $insta->link =$results['data'][$i]['link'];
                       $insta->low_resolution=$results['data'][$i]['videos']['low_resolution']['url'];
                       $insta->count=$results['data'][$i]['comments']['count'];
                       $insta->link=$results['data'][$i]['link'];
                       $tagss=implode(',',$results['data'][$i]['tags']);
                       $insta->tags=$tagss;
                       $insta->likes=$results['data'][$i]['likes']['count'];
                       $insta->img_low_resolution=$results['data'][$i]['images']['low_resolution']['url'];
                       $insta->text=$results['data'][$i]['caption']['text'];
                       $insta->username=$results['data'][$i]['caption']['from']['username'];
                       $insta->profile_picture=$results['data'][$i]['caption']['from']['profile_picture'];
                       $insta->insta_id=$results['data'][$i]['caption']['from']['id'];
                       //$insta->link=$results['data'][$i]['caption']['from']['full_name'],'full name';
                       $insta->insert();
                       $insta->free();
                    }
                }
            }
            //escribe en archivo los dtos de instagram
            $this->jsonFile();
        }
        //escribe la info en un archivo
        public function jsonFile(){
            $insta = DB_DataObject::Factory('Rexr_instagram');
            DB_DataObject::debugLevel(0);
            $insta->find();
            $dataInsta=[];
            $i=0;
            while($insta->fetch()){
                $dataInsta[$i]['low_resolution']=$insta->low_resolution ;
                $dataInsta[$i]['count']=$insta->count ;
                $dataInsta[$i]['link']=$insta->link ;
                $dataInsta[$i]['tags']=$insta->tags ;
                $dataInsta[$i]['likes']=$insta->likes ;
                $dataInsta[$i]['img_low_resolution']=$insta->img_low_resolution ;
                $dataInsta[$i]['text']=$insta->text ;
                $dataInsta[$i]['username']=$insta->username ;
                $dataInsta[$i]['profile_picture']=$insta->profile_picture ;
                $dataInsta[$i]['insta_id']=$insta->insta_id ;
                $i++;
            }
            //printVar($dataInsta,'arreglo de datos instagram');
            $insta->free();
            $fp = fopen('results/d.json', 'w');
            fwrite($fp, json_encode($dataInsta));
            fclose($fp);

        }
        //trae la info del contador
        public function getContador(){
            $insta = DB_DataObject::Factory('Rexr_instagram');
            DB_DataObject::debugLevel(0);
        }
    }
?>
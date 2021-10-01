<script type="text/javascript">
        window.onload = function(){
            document.querySelector(".menu-mobile").addEventListener("click", function() {
                if(document.querySelector(".menu_header nav ul").style.display == "flex")
                {
                    document.querySelector(".menu_header nav ul").style.display = "none";
                }else {
                    document.querySelector(".menu_header nav ul").style.display = "flex";
                }
            });
        };

    </script>
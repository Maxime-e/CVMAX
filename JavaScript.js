<script type="texte/javascript">
    $(document).ready(function(){
      $('#exampleModal').modal({
          montrer : faux
      }).on('hidden.bs.modal', function(){
          $(this).find('vidéo')[0].pause();
      })
    });
</script>
$(function() {
  $('[data-load="lazy"]').lazy({
    placeholder: "data:image/gif;base64,R0lGODlhEALAPQAPzl5uLr9Nrl8e7..."
  });

$('[data-elem="siteSearch"]').on('keyup', function (){
  console.log($(this).val());
  if($(this).val())
    $('[data-elem="clearSiteSearch"]').removeClass('d-none');
  else
    $('[data-elem="clearSiteSearch"]').addClass('d-none');
});

  $('[data-elem="clearSiteSearch"]').on('click', function (){
    let _self = $(this)
    _self.addClass('d-none');
    $('[data-elem="siteSearch"]').val('').focus();
  })
});

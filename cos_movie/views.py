from django.urls import reverse
from django.views import generic
from movie_django import settings


class HomeRedirectView(generic.RedirectView):
    def get_redirect_url(self, *args, **kwargs):
        if self.request.is_mobile:
            return reverse('mobile_home')
        else:
            return reverse('desktop_home')


class DesktopHomeView(generic.TemplateView):
    template_name = "{}/desktop/base.html".format(settings.THEME_NAME)


class MobileHomeView(generic.TemplateView):
    template_name = "{}/mobile/base.html".format(settings.THEME_NAME)
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datetime',
  standalone: true
})
export class DatetimePipe implements PipeTransform {
  transform(value: Date) {
    const now = new Date().getTime();
    const valueDate = new Date(value).getTime();
    const diff = Math.abs(now - valueDate) / 1000;

    if (diff < 60) {
      return `${Math.floor(diff)} segundo(s) atrás`;
    }

    if (diff < 3600) {
      return `${Math.floor(diff / 60)} minuto(s) atrás`;
    }

    if (diff < 86400) {
      return `${Math.floor(diff / 3600)} hora(s) atrás`;
    }

    if (diff < 2592000) {
      return `${Math.floor(diff / 86400)} dia(s) atrás`;
    }

    if (diff < 31536000) {
      return `${Math.floor(diff / 2592000)} mês(es) atrás`;
    }

    return `${Math.floor(diff / 31536000)} ano(s) atrás`;
  }
}

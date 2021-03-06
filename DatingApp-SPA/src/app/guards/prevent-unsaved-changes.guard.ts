import { Injectable } from '@angular/core';
import { MemberEditComponent } from '../members/member-edit/member-edit.component';
import { CanDeactivate } from '@angular/router';

Injectable()

export class PreventsUnsavedChanges implements CanDeactivate<MemberEditComponent>{
    canDeactivate(component: MemberEditComponent) {
        if (component.editForm) {
            return confirm('Are you sure you want to continue? Any unsaved changes will be lost')
        }
        return true;
    }

}

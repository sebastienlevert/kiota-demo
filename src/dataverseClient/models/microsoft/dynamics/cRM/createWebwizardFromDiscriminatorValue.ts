import {Webwizard} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWebwizardFromDiscriminatorValue(parseNode: ParseNode | undefined) : Webwizard {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Webwizard();
}

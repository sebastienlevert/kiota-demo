import {Msdyn_templatetags} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_templatetagsFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_templatetags {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_templatetags();
}

import {Userform} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserformFromDiscriminatorValue(parseNode: ParseNode | undefined) : Userform {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Userform();
}

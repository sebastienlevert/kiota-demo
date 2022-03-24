import {Userquery} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserqueryFromDiscriminatorValue(parseNode: ParseNode | undefined) : Userquery {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Userquery();
}

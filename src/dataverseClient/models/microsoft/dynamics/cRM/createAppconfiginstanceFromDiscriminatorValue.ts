import {Appconfiginstance} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAppconfiginstanceFromDiscriminatorValue(parseNode: ParseNode | undefined) : Appconfiginstance {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Appconfiginstance();
}

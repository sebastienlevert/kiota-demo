import {Datalakefolder} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDatalakefolderFromDiscriminatorValue(parseNode: ParseNode | undefined) : Datalakefolder {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Datalakefolder();
}

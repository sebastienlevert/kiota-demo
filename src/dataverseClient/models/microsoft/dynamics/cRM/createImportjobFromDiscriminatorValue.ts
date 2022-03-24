import {Importjob} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createImportjobFromDiscriminatorValue(parseNode: ParseNode | undefined) : Importjob {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Importjob();
}

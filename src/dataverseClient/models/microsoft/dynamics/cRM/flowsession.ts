import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createFileattachmentFromDiscriminatorValue} from './createFileattachmentFromDiscriminatorValue';
import {createFlowmachineFromDiscriminatorValue} from './createFlowmachineFromDiscriminatorValue';
import {createFlowmachinegroupFromDiscriminatorValue} from './createFlowmachinegroupFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {createWorkflowbinaryFromDiscriminatorValue} from './createWorkflowbinaryFromDiscriminatorValue';
import {createWorkflowFromDiscriminatorValue} from './createWorkflowFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Fileattachment, Flowmachine, Flowmachinegroup, Mailboxtrackingfolder, Principal, Principalobjectattributeaccess, Syncerror, Systemuser, Team, Workflow, Workflowbinary} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Flowsession extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __machinegroupid_value?: string | undefined;
    private __machineid_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private __regardingobjectid_value?: string | undefined;
    private _additionalcontext?: string | undefined;
    private _additionalcontext_name?: string | undefined;
    private _completedon?: Date | undefined;
    private _context?: string | undefined;
    private _correlationid?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _errorcode?: string | undefined;
    private _errormessage?: string | undefined;
    private _flowsession_AsyncOperations?: Asyncoperation[] | undefined;
    private _flowsession_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _flowsession_FileAttachments?: Fileattachment[] | undefined;
    private _flowsession_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _flowsession_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _flowsession_SyncErrors?: Syncerror[] | undefined;
    private _flowsession_workflowbinary_FlowSessionId?: Workflowbinary[] | undefined;
    private _flowsessionid?: string | undefined;
    private _gateway?: string | undefined;
    private _importsequencenumber?: number | undefined;
    private _machineGroupId?: Flowmachinegroup | undefined;
    private _machineId?: Flowmachine | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _name?: string | undefined;
    private _outputs?: string | undefined;
    private _outputs_name?: string | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _processversion?: string | undefined;
    private _regardingobjectid_process?: Workflow | undefined;
    private _startedon?: Date | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _versionnumber?: number | undefined;
    /**
     * Gets the _createdby_value property value. 
     * @returns a string
     */
    public get _createdby_value() {
        return this.__createdby_value;
    };
    /**
     * Sets the _createdby_value property value. 
     * @param value Value to set for the _createdby_value property.
     */
    public set _createdby_value(value: string | undefined) {
        this.__createdby_value = value;
    };
    /**
     * Gets the _createdonbehalfby_value property value. 
     * @returns a string
     */
    public get _createdonbehalfby_value() {
        return this.__createdonbehalfby_value;
    };
    /**
     * Sets the _createdonbehalfby_value property value. 
     * @param value Value to set for the _createdonbehalfby_value property.
     */
    public set _createdonbehalfby_value(value: string | undefined) {
        this.__createdonbehalfby_value = value;
    };
    /**
     * Gets the _machinegroupid_value property value. 
     * @returns a string
     */
    public get _machinegroupid_value() {
        return this.__machinegroupid_value;
    };
    /**
     * Sets the _machinegroupid_value property value. 
     * @param value Value to set for the _machinegroupid_value property.
     */
    public set _machinegroupid_value(value: string | undefined) {
        this.__machinegroupid_value = value;
    };
    /**
     * Gets the _machineid_value property value. 
     * @returns a string
     */
    public get _machineid_value() {
        return this.__machineid_value;
    };
    /**
     * Sets the _machineid_value property value. 
     * @param value Value to set for the _machineid_value property.
     */
    public set _machineid_value(value: string | undefined) {
        this.__machineid_value = value;
    };
    /**
     * Gets the _modifiedby_value property value. 
     * @returns a string
     */
    public get _modifiedby_value() {
        return this.__modifiedby_value;
    };
    /**
     * Sets the _modifiedby_value property value. 
     * @param value Value to set for the _modifiedby_value property.
     */
    public set _modifiedby_value(value: string | undefined) {
        this.__modifiedby_value = value;
    };
    /**
     * Gets the _modifiedonbehalfby_value property value. 
     * @returns a string
     */
    public get _modifiedonbehalfby_value() {
        return this.__modifiedonbehalfby_value;
    };
    /**
     * Sets the _modifiedonbehalfby_value property value. 
     * @param value Value to set for the _modifiedonbehalfby_value property.
     */
    public set _modifiedonbehalfby_value(value: string | undefined) {
        this.__modifiedonbehalfby_value = value;
    };
    /**
     * Gets the _ownerid_value property value. 
     * @returns a string
     */
    public get _ownerid_value() {
        return this.__ownerid_value;
    };
    /**
     * Sets the _ownerid_value property value. 
     * @param value Value to set for the _ownerid_value property.
     */
    public set _ownerid_value(value: string | undefined) {
        this.__ownerid_value = value;
    };
    /**
     * Gets the _owningbusinessunit_value property value. 
     * @returns a string
     */
    public get _owningbusinessunit_value() {
        return this.__owningbusinessunit_value;
    };
    /**
     * Sets the _owningbusinessunit_value property value. 
     * @param value Value to set for the _owningbusinessunit_value property.
     */
    public set _owningbusinessunit_value(value: string | undefined) {
        this.__owningbusinessunit_value = value;
    };
    /**
     * Gets the _owningteam_value property value. 
     * @returns a string
     */
    public get _owningteam_value() {
        return this.__owningteam_value;
    };
    /**
     * Sets the _owningteam_value property value. 
     * @param value Value to set for the _owningteam_value property.
     */
    public set _owningteam_value(value: string | undefined) {
        this.__owningteam_value = value;
    };
    /**
     * Gets the _owninguser_value property value. 
     * @returns a string
     */
    public get _owninguser_value() {
        return this.__owninguser_value;
    };
    /**
     * Sets the _owninguser_value property value. 
     * @param value Value to set for the _owninguser_value property.
     */
    public set _owninguser_value(value: string | undefined) {
        this.__owninguser_value = value;
    };
    /**
     * Gets the _regardingobjectid_value property value. 
     * @returns a string
     */
    public get _regardingobjectid_value() {
        return this.__regardingobjectid_value;
    };
    /**
     * Sets the _regardingobjectid_value property value. 
     * @param value Value to set for the _regardingobjectid_value property.
     */
    public set _regardingobjectid_value(value: string | undefined) {
        this.__regardingobjectid_value = value;
    };
    /**
     * Gets the additionalcontext property value. 
     * @returns a binary
     */
    public get additionalcontext() {
        return this._additionalcontext;
    };
    /**
     * Sets the additionalcontext property value. 
     * @param value Value to set for the additionalcontext property.
     */
    public set additionalcontext(value: string | undefined) {
        this._additionalcontext = value;
    };
    /**
     * Gets the additionalcontext_name property value. 
     * @returns a string
     */
    public get additionalcontext_name() {
        return this._additionalcontext_name;
    };
    /**
     * Sets the additionalcontext_name property value. 
     * @param value Value to set for the additionalcontext_name property.
     */
    public set additionalcontext_name(value: string | undefined) {
        this._additionalcontext_name = value;
    };
    /**
     * Gets the completedon property value. 
     * @returns a Date
     */
    public get completedon() {
        return this._completedon;
    };
    /**
     * Sets the completedon property value. 
     * @param value Value to set for the completedon property.
     */
    public set completedon(value: Date | undefined) {
        this._completedon = value;
    };
    /**
     * Instantiates a new flowsession and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the context property value. 
     * @returns a string
     */
    public get context() {
        return this._context;
    };
    /**
     * Sets the context property value. 
     * @param value Value to set for the context property.
     */
    public set context(value: string | undefined) {
        this._context = value;
    };
    /**
     * Gets the correlationid property value. 
     * @returns a string
     */
    public get correlationid() {
        return this._correlationid;
    };
    /**
     * Sets the correlationid property value. 
     * @param value Value to set for the correlationid property.
     */
    public set correlationid(value: string | undefined) {
        this._correlationid = value;
    };
    /**
     * Gets the createdby property value. 
     * @returns a systemuser
     */
    public get createdby() {
        return this._createdby;
    };
    /**
     * Sets the createdby property value. 
     * @param value Value to set for the createdby property.
     */
    public set createdby(value: Systemuser | undefined) {
        this._createdby = value;
    };
    /**
     * Gets the createdon property value. 
     * @returns a Date
     */
    public get createdon() {
        return this._createdon;
    };
    /**
     * Sets the createdon property value. 
     * @param value Value to set for the createdon property.
     */
    public set createdon(value: Date | undefined) {
        this._createdon = value;
    };
    /**
     * Gets the createdonbehalfby property value. 
     * @returns a systemuser
     */
    public get createdonbehalfby() {
        return this._createdonbehalfby;
    };
    /**
     * Sets the createdonbehalfby property value. 
     * @param value Value to set for the createdonbehalfby property.
     */
    public set createdonbehalfby(value: Systemuser | undefined) {
        this._createdonbehalfby = value;
    };
    /**
     * Gets the errorcode property value. 
     * @returns a string
     */
    public get errorcode() {
        return this._errorcode;
    };
    /**
     * Sets the errorcode property value. 
     * @param value Value to set for the errorcode property.
     */
    public set errorcode(value: string | undefined) {
        this._errorcode = value;
    };
    /**
     * Gets the errormessage property value. 
     * @returns a string
     */
    public get errormessage() {
        return this._errormessage;
    };
    /**
     * Sets the errormessage property value. 
     * @param value Value to set for the errormessage property.
     */
    public set errormessage(value: string | undefined) {
        this._errormessage = value;
    };
    /**
     * Gets the flowsession_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get flowsession_AsyncOperations() {
        return this._flowsession_AsyncOperations;
    };
    /**
     * Sets the flowsession_AsyncOperations property value. 
     * @param value Value to set for the flowsession_AsyncOperations property.
     */
    public set flowsession_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._flowsession_AsyncOperations = value;
    };
    /**
     * Gets the flowsession_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get flowsession_BulkDeleteFailures() {
        return this._flowsession_BulkDeleteFailures;
    };
    /**
     * Sets the flowsession_BulkDeleteFailures property value. 
     * @param value Value to set for the flowsession_BulkDeleteFailures property.
     */
    public set flowsession_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._flowsession_BulkDeleteFailures = value;
    };
    /**
     * Gets the flowsession_FileAttachments property value. 
     * @returns a fileattachment
     */
    public get flowsession_FileAttachments() {
        return this._flowsession_FileAttachments;
    };
    /**
     * Sets the flowsession_FileAttachments property value. 
     * @param value Value to set for the flowsession_FileAttachments property.
     */
    public set flowsession_FileAttachments(value: Fileattachment[] | undefined) {
        this._flowsession_FileAttachments = value;
    };
    /**
     * Gets the flowsession_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get flowsession_MailboxTrackingFolders() {
        return this._flowsession_MailboxTrackingFolders;
    };
    /**
     * Sets the flowsession_MailboxTrackingFolders property value. 
     * @param value Value to set for the flowsession_MailboxTrackingFolders property.
     */
    public set flowsession_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._flowsession_MailboxTrackingFolders = value;
    };
    /**
     * Gets the flowsession_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get flowsession_PrincipalObjectAttributeAccesses() {
        return this._flowsession_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the flowsession_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the flowsession_PrincipalObjectAttributeAccesses property.
     */
    public set flowsession_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._flowsession_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the flowsession_SyncErrors property value. 
     * @returns a syncerror
     */
    public get flowsession_SyncErrors() {
        return this._flowsession_SyncErrors;
    };
    /**
     * Sets the flowsession_SyncErrors property value. 
     * @param value Value to set for the flowsession_SyncErrors property.
     */
    public set flowsession_SyncErrors(value: Syncerror[] | undefined) {
        this._flowsession_SyncErrors = value;
    };
    /**
     * Gets the flowsession_workflowbinary_FlowSessionId property value. 
     * @returns a workflowbinary
     */
    public get flowsession_workflowbinary_FlowSessionId() {
        return this._flowsession_workflowbinary_FlowSessionId;
    };
    /**
     * Sets the flowsession_workflowbinary_FlowSessionId property value. 
     * @param value Value to set for the flowsession_workflowbinary_FlowSessionId property.
     */
    public set flowsession_workflowbinary_FlowSessionId(value: Workflowbinary[] | undefined) {
        this._flowsession_workflowbinary_FlowSessionId = value;
    };
    /**
     * Gets the flowsessionid property value. 
     * @returns a string
     */
    public get flowsessionid() {
        return this._flowsessionid;
    };
    /**
     * Sets the flowsessionid property value. 
     * @param value Value to set for the flowsessionid property.
     */
    public set flowsessionid(value: string | undefined) {
        this._flowsessionid = value;
    };
    /**
     * Gets the gateway property value. 
     * @returns a string
     */
    public get gateway() {
        return this._gateway;
    };
    /**
     * Sets the gateway property value. 
     * @param value Value to set for the gateway property.
     */
    public set gateway(value: string | undefined) {
        this._gateway = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Flowsession)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Flowsession)._createdonbehalfby_value = n.getStringValue(); },
            "_machinegroupid_value": (o, n) => { (o as unknown as Flowsession)._machinegroupid_value = n.getStringValue(); },
            "_machineid_value": (o, n) => { (o as unknown as Flowsession)._machineid_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Flowsession)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Flowsession)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Flowsession)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Flowsession)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Flowsession)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Flowsession)._owninguser_value = n.getStringValue(); },
            "_regardingobjectid_value": (o, n) => { (o as unknown as Flowsession)._regardingobjectid_value = n.getStringValue(); },
            "additionalcontext": (o, n) => { (o as unknown as Flowsession).additionalcontext = n.getStringValue(); },
            "additionalcontext_name": (o, n) => { (o as unknown as Flowsession).additionalcontext_name = n.getStringValue(); },
            "completedon": (o, n) => { (o as unknown as Flowsession).completedon = n.getDateValue(); },
            "context": (o, n) => { (o as unknown as Flowsession).context = n.getStringValue(); },
            "correlationid": (o, n) => { (o as unknown as Flowsession).correlationid = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Flowsession).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Flowsession).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Flowsession).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "errorcode": (o, n) => { (o as unknown as Flowsession).errorcode = n.getStringValue(); },
            "errormessage": (o, n) => { (o as unknown as Flowsession).errormessage = n.getStringValue(); },
            "flowsession_AsyncOperations": (o, n) => { (o as unknown as Flowsession).flowsession_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "flowsession_BulkDeleteFailures": (o, n) => { (o as unknown as Flowsession).flowsession_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "flowsession_FileAttachments": (o, n) => { (o as unknown as Flowsession).flowsession_FileAttachments = n.getCollectionOfObjectValues<Fileattachment>(createFileattachmentFromDiscriminatorValue); },
            "flowsession_MailboxTrackingFolders": (o, n) => { (o as unknown as Flowsession).flowsession_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "flowsession_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Flowsession).flowsession_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "flowsession_SyncErrors": (o, n) => { (o as unknown as Flowsession).flowsession_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "flowsession_workflowbinary_FlowSessionId": (o, n) => { (o as unknown as Flowsession).flowsession_workflowbinary_FlowSessionId = n.getCollectionOfObjectValues<Workflowbinary>(createWorkflowbinaryFromDiscriminatorValue); },
            "flowsessionid": (o, n) => { (o as unknown as Flowsession).flowsessionid = n.getStringValue(); },
            "gateway": (o, n) => { (o as unknown as Flowsession).gateway = n.getStringValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Flowsession).importsequencenumber = n.getNumberValue(); },
            "machineGroupId": (o, n) => { (o as unknown as Flowsession).machineGroupId = n.getObjectValue<Flowmachinegroup>(createFlowmachinegroupFromDiscriminatorValue); },
            "machineId": (o, n) => { (o as unknown as Flowsession).machineId = n.getObjectValue<Flowmachine>(createFlowmachineFromDiscriminatorValue); },
            "modifiedby": (o, n) => { (o as unknown as Flowsession).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Flowsession).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Flowsession).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Flowsession).name = n.getStringValue(); },
            "outputs": (o, n) => { (o as unknown as Flowsession).outputs = n.getStringValue(); },
            "outputs_name": (o, n) => { (o as unknown as Flowsession).outputs_name = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Flowsession).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Flowsession).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Flowsession).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Flowsession).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Flowsession).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "processversion": (o, n) => { (o as unknown as Flowsession).processversion = n.getStringValue(); },
            "regardingobjectid_process": (o, n) => { (o as unknown as Flowsession).regardingobjectid_process = n.getObjectValue<Workflow>(createWorkflowFromDiscriminatorValue); },
            "startedon": (o, n) => { (o as unknown as Flowsession).startedon = n.getDateValue(); },
            "statecode": (o, n) => { (o as unknown as Flowsession).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Flowsession).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Flowsession).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Flowsession).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Flowsession).versionnumber = n.getNumberValue(); },
        };
    };
    /**
     * Gets the importsequencenumber property value. 
     * @returns a integer
     */
    public get importsequencenumber() {
        return this._importsequencenumber;
    };
    /**
     * Sets the importsequencenumber property value. 
     * @param value Value to set for the importsequencenumber property.
     */
    public set importsequencenumber(value: number | undefined) {
        this._importsequencenumber = value;
    };
    /**
     * Gets the machineGroupId property value. 
     * @returns a flowmachinegroup
     */
    public get machineGroupId() {
        return this._machineGroupId;
    };
    /**
     * Sets the machineGroupId property value. 
     * @param value Value to set for the MachineGroupId property.
     */
    public set machineGroupId(value: Flowmachinegroup | undefined) {
        this._machineGroupId = value;
    };
    /**
     * Gets the machineId property value. 
     * @returns a flowmachine
     */
    public get machineId() {
        return this._machineId;
    };
    /**
     * Sets the machineId property value. 
     * @param value Value to set for the MachineId property.
     */
    public set machineId(value: Flowmachine | undefined) {
        this._machineId = value;
    };
    /**
     * Gets the modifiedby property value. 
     * @returns a systemuser
     */
    public get modifiedby() {
        return this._modifiedby;
    };
    /**
     * Sets the modifiedby property value. 
     * @param value Value to set for the modifiedby property.
     */
    public set modifiedby(value: Systemuser | undefined) {
        this._modifiedby = value;
    };
    /**
     * Gets the modifiedon property value. 
     * @returns a Date
     */
    public get modifiedon() {
        return this._modifiedon;
    };
    /**
     * Sets the modifiedon property value. 
     * @param value Value to set for the modifiedon property.
     */
    public set modifiedon(value: Date | undefined) {
        this._modifiedon = value;
    };
    /**
     * Gets the modifiedonbehalfby property value. 
     * @returns a systemuser
     */
    public get modifiedonbehalfby() {
        return this._modifiedonbehalfby;
    };
    /**
     * Sets the modifiedonbehalfby property value. 
     * @param value Value to set for the modifiedonbehalfby property.
     */
    public set modifiedonbehalfby(value: Systemuser | undefined) {
        this._modifiedonbehalfby = value;
    };
    /**
     * Gets the name property value. 
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. 
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Gets the outputs property value. 
     * @returns a binary
     */
    public get outputs() {
        return this._outputs;
    };
    /**
     * Sets the outputs property value. 
     * @param value Value to set for the outputs property.
     */
    public set outputs(value: string | undefined) {
        this._outputs = value;
    };
    /**
     * Gets the outputs_name property value. 
     * @returns a string
     */
    public get outputs_name() {
        return this._outputs_name;
    };
    /**
     * Sets the outputs_name property value. 
     * @param value Value to set for the outputs_name property.
     */
    public set outputs_name(value: string | undefined) {
        this._outputs_name = value;
    };
    /**
     * Gets the overriddencreatedon property value. 
     * @returns a Date
     */
    public get overriddencreatedon() {
        return this._overriddencreatedon;
    };
    /**
     * Sets the overriddencreatedon property value. 
     * @param value Value to set for the overriddencreatedon property.
     */
    public set overriddencreatedon(value: Date | undefined) {
        this._overriddencreatedon = value;
    };
    /**
     * Gets the ownerid property value. 
     * @returns a principal
     */
    public get ownerid() {
        return this._ownerid;
    };
    /**
     * Sets the ownerid property value. 
     * @param value Value to set for the ownerid property.
     */
    public set ownerid(value: Principal | undefined) {
        this._ownerid = value;
    };
    /**
     * Gets the owningbusinessunit property value. 
     * @returns a businessunit
     */
    public get owningbusinessunit() {
        return this._owningbusinessunit;
    };
    /**
     * Sets the owningbusinessunit property value. 
     * @param value Value to set for the owningbusinessunit property.
     */
    public set owningbusinessunit(value: Businessunit | undefined) {
        this._owningbusinessunit = value;
    };
    /**
     * Gets the owningteam property value. 
     * @returns a team
     */
    public get owningteam() {
        return this._owningteam;
    };
    /**
     * Sets the owningteam property value. 
     * @param value Value to set for the owningteam property.
     */
    public set owningteam(value: Team | undefined) {
        this._owningteam = value;
    };
    /**
     * Gets the owninguser property value. 
     * @returns a systemuser
     */
    public get owninguser() {
        return this._owninguser;
    };
    /**
     * Sets the owninguser property value. 
     * @param value Value to set for the owninguser property.
     */
    public set owninguser(value: Systemuser | undefined) {
        this._owninguser = value;
    };
    /**
     * Gets the processversion property value. 
     * @returns a string
     */
    public get processversion() {
        return this._processversion;
    };
    /**
     * Sets the processversion property value. 
     * @param value Value to set for the processversion property.
     */
    public set processversion(value: string | undefined) {
        this._processversion = value;
    };
    /**
     * Gets the regardingobjectid_process property value. 
     * @returns a workflow
     */
    public get regardingobjectid_process() {
        return this._regardingobjectid_process;
    };
    /**
     * Sets the regardingobjectid_process property value. 
     * @param value Value to set for the regardingobjectid_process property.
     */
    public set regardingobjectid_process(value: Workflow | undefined) {
        this._regardingobjectid_process = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_machinegroupid_value", this._machinegroupid_value);
        writer.writeStringValue("_machineid_value", this._machineid_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeStringValue("_regardingobjectid_value", this._regardingobjectid_value);
        writer.writeStringValue("additionalcontext", this.additionalcontext);
        writer.writeStringValue("additionalcontext_name", this.additionalcontext_name);
        writer.writeDateValue("completedon", this.completedon);
        writer.writeStringValue("context", this.context);
        writer.writeStringValue("correlationid", this.correlationid);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeStringValue("errorcode", this.errorcode);
        writer.writeStringValue("errormessage", this.errormessage);
        writer.writeCollectionOfObjectValues<Asyncoperation>("flowsession_AsyncOperations", this.flowsession_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("flowsession_BulkDeleteFailures", this.flowsession_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Fileattachment>("flowsession_FileAttachments", this.flowsession_FileAttachments);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("flowsession_MailboxTrackingFolders", this.flowsession_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("flowsession_PrincipalObjectAttributeAccesses", this.flowsession_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Syncerror>("flowsession_SyncErrors", this.flowsession_SyncErrors);
        writer.writeCollectionOfObjectValues<Workflowbinary>("flowsession_workflowbinary_FlowSessionId", this.flowsession_workflowbinary_FlowSessionId);
        writer.writeStringValue("flowsessionid", this.flowsessionid);
        writer.writeStringValue("gateway", this.gateway);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Flowmachinegroup>("machineGroupId", this.machineGroupId);
        writer.writeObjectValue<Flowmachine>("machineId", this.machineId);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("name", this.name);
        writer.writeStringValue("outputs", this.outputs);
        writer.writeStringValue("outputs_name", this.outputs_name);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeStringValue("processversion", this.processversion);
        writer.writeObjectValue<Workflow>("regardingobjectid_process", this.regardingobjectid_process);
        writer.writeDateValue("startedon", this.startedon);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the startedon property value. 
     * @returns a Date
     */
    public get startedon() {
        return this._startedon;
    };
    /**
     * Sets the startedon property value. 
     * @param value Value to set for the startedon property.
     */
    public set startedon(value: Date | undefined) {
        this._startedon = value;
    };
    /**
     * Gets the statecode property value. 
     * @returns a integer
     */
    public get statecode() {
        return this._statecode;
    };
    /**
     * Sets the statecode property value. 
     * @param value Value to set for the statecode property.
     */
    public set statecode(value: number | undefined) {
        this._statecode = value;
    };
    /**
     * Gets the statuscode property value. 
     * @returns a integer
     */
    public get statuscode() {
        return this._statuscode;
    };
    /**
     * Sets the statuscode property value. 
     * @param value Value to set for the statuscode property.
     */
    public set statuscode(value: number | undefined) {
        this._statuscode = value;
    };
    /**
     * Gets the timezoneruleversionnumber property value. 
     * @returns a integer
     */
    public get timezoneruleversionnumber() {
        return this._timezoneruleversionnumber;
    };
    /**
     * Sets the timezoneruleversionnumber property value. 
     * @param value Value to set for the timezoneruleversionnumber property.
     */
    public set timezoneruleversionnumber(value: number | undefined) {
        this._timezoneruleversionnumber = value;
    };
    /**
     * Gets the utcconversiontimezonecode property value. 
     * @returns a integer
     */
    public get utcconversiontimezonecode() {
        return this._utcconversiontimezonecode;
    };
    /**
     * Sets the utcconversiontimezonecode property value. 
     * @param value Value to set for the utcconversiontimezonecode property.
     */
    public set utcconversiontimezonecode(value: number | undefined) {
        this._utcconversiontimezonecode = value;
    };
    /**
     * Gets the versionnumber property value. 
     * @returns a int64
     */
    public get versionnumber() {
        return this._versionnumber;
    };
    /**
     * Sets the versionnumber property value. 
     * @param value Value to set for the versionnumber property.
     */
    public set versionnumber(value: number | undefined) {
        this._versionnumber = value;
    };
}

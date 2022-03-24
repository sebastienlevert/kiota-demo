import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createFileattachmentFromDiscriminatorValue} from './createFileattachmentFromDiscriminatorValue';
import {createFlowsessionFromDiscriminatorValue} from './createFlowsessionFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {createWorkflowFromDiscriminatorValue} from './createWorkflowFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Fileattachment, Flowsession, Mailboxtrackingfolder, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team, Workflow} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Workflowbinary extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __flowsessionid_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private __process_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _data?: string | undefined;
    private _data_name?: string | undefined;
    private _flowSessionId?: Flowsession | undefined;
    private _importsequencenumber?: number | undefined;
    private _metadata?: string | undefined;
    private _mimetype?: string | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _name?: string | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _process?: Workflow | undefined;
    private _referencename?: string | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _type?: string | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _versionnumber?: number | undefined;
    private _workflowbinary_AsyncOperations?: Asyncoperation[] | undefined;
    private _workflowbinary_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _workflowbinary_FileAttachments?: Fileattachment[] | undefined;
    private _workflowbinary_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _workflowbinary_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _workflowbinary_ProcessSession?: Processsession[] | undefined;
    private _workflowbinary_SyncErrors?: Syncerror[] | undefined;
    private _workflowbinaryid?: string | undefined;
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
     * Gets the _flowsessionid_value property value. 
     * @returns a string
     */
    public get _flowsessionid_value() {
        return this.__flowsessionid_value;
    };
    /**
     * Sets the _flowsessionid_value property value. 
     * @param value Value to set for the _flowsessionid_value property.
     */
    public set _flowsessionid_value(value: string | undefined) {
        this.__flowsessionid_value = value;
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
     * Gets the _process_value property value. 
     * @returns a string
     */
    public get _process_value() {
        return this.__process_value;
    };
    /**
     * Sets the _process_value property value. 
     * @param value Value to set for the _process_value property.
     */
    public set _process_value(value: string | undefined) {
        this.__process_value = value;
    };
    /**
     * Instantiates a new workflowbinary and sets the default values.
     */
    public constructor() {
        super();
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
     * Gets the data property value. 
     * @returns a binary
     */
    public get data() {
        return this._data;
    };
    /**
     * Sets the data property value. 
     * @param value Value to set for the data property.
     */
    public set data(value: string | undefined) {
        this._data = value;
    };
    /**
     * Gets the data_name property value. 
     * @returns a string
     */
    public get data_name() {
        return this._data_name;
    };
    /**
     * Sets the data_name property value. 
     * @param value Value to set for the data_name property.
     */
    public set data_name(value: string | undefined) {
        this._data_name = value;
    };
    /**
     * Gets the flowSessionId property value. 
     * @returns a flowsession
     */
    public get flowSessionId() {
        return this._flowSessionId;
    };
    /**
     * Sets the flowSessionId property value. 
     * @param value Value to set for the FlowSessionId property.
     */
    public set flowSessionId(value: Flowsession | undefined) {
        this._flowSessionId = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Workflowbinary)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Workflowbinary)._createdonbehalfby_value = n.getStringValue(); },
            "_flowsessionid_value": (o, n) => { (o as unknown as Workflowbinary)._flowsessionid_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Workflowbinary)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Workflowbinary)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Workflowbinary)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Workflowbinary)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Workflowbinary)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Workflowbinary)._owninguser_value = n.getStringValue(); },
            "_process_value": (o, n) => { (o as unknown as Workflowbinary)._process_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Workflowbinary).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Workflowbinary).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Workflowbinary).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "data": (o, n) => { (o as unknown as Workflowbinary).data = n.getStringValue(); },
            "data_name": (o, n) => { (o as unknown as Workflowbinary).data_name = n.getStringValue(); },
            "flowSessionId": (o, n) => { (o as unknown as Workflowbinary).flowSessionId = n.getObjectValue<Flowsession>(createFlowsessionFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Workflowbinary).importsequencenumber = n.getNumberValue(); },
            "metadata": (o, n) => { (o as unknown as Workflowbinary).metadata = n.getStringValue(); },
            "mimetype": (o, n) => { (o as unknown as Workflowbinary).mimetype = n.getStringValue(); },
            "modifiedby": (o, n) => { (o as unknown as Workflowbinary).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Workflowbinary).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Workflowbinary).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Workflowbinary).name = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Workflowbinary).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Workflowbinary).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Workflowbinary).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Workflowbinary).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Workflowbinary).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "process": (o, n) => { (o as unknown as Workflowbinary).process = n.getObjectValue<Workflow>(createWorkflowFromDiscriminatorValue); },
            "referencename": (o, n) => { (o as unknown as Workflowbinary).referencename = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Workflowbinary).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Workflowbinary).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Workflowbinary).timezoneruleversionnumber = n.getNumberValue(); },
            "type": (o, n) => { (o as unknown as Workflowbinary).type = n.getStringValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Workflowbinary).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Workflowbinary).versionnumber = n.getNumberValue(); },
            "workflowbinary_AsyncOperations": (o, n) => { (o as unknown as Workflowbinary).workflowbinary_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "workflowbinary_BulkDeleteFailures": (o, n) => { (o as unknown as Workflowbinary).workflowbinary_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "workflowbinary_FileAttachments": (o, n) => { (o as unknown as Workflowbinary).workflowbinary_FileAttachments = n.getCollectionOfObjectValues<Fileattachment>(createFileattachmentFromDiscriminatorValue); },
            "workflowbinary_MailboxTrackingFolders": (o, n) => { (o as unknown as Workflowbinary).workflowbinary_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "workflowbinary_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Workflowbinary).workflowbinary_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "workflowbinary_ProcessSession": (o, n) => { (o as unknown as Workflowbinary).workflowbinary_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "workflowbinary_SyncErrors": (o, n) => { (o as unknown as Workflowbinary).workflowbinary_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "workflowbinaryid": (o, n) => { (o as unknown as Workflowbinary).workflowbinaryid = n.getStringValue(); },
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
     * Gets the metadata property value. 
     * @returns a string
     */
    public get metadata() {
        return this._metadata;
    };
    /**
     * Sets the metadata property value. 
     * @param value Value to set for the metadata property.
     */
    public set metadata(value: string | undefined) {
        this._metadata = value;
    };
    /**
     * Gets the mimetype property value. 
     * @returns a string
     */
    public get mimetype() {
        return this._mimetype;
    };
    /**
     * Sets the mimetype property value. 
     * @param value Value to set for the mimetype property.
     */
    public set mimetype(value: string | undefined) {
        this._mimetype = value;
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
     * Gets the process property value. 
     * @returns a workflow
     */
    public get process() {
        return this._process;
    };
    /**
     * Sets the process property value. 
     * @param value Value to set for the Process property.
     */
    public set process(value: Workflow | undefined) {
        this._process = value;
    };
    /**
     * Gets the referencename property value. 
     * @returns a string
     */
    public get referencename() {
        return this._referencename;
    };
    /**
     * Sets the referencename property value. 
     * @param value Value to set for the referencename property.
     */
    public set referencename(value: string | undefined) {
        this._referencename = value;
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
        writer.writeStringValue("_flowsessionid_value", this._flowsessionid_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeStringValue("_process_value", this._process_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeStringValue("data", this.data);
        writer.writeStringValue("data_name", this.data_name);
        writer.writeObjectValue<Flowsession>("flowSessionId", this.flowSessionId);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeStringValue("metadata", this.metadata);
        writer.writeStringValue("mimetype", this.mimetype);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("name", this.name);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeObjectValue<Workflow>("process", this.process);
        writer.writeStringValue("referencename", this.referencename);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeStringValue("type", this.type);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
        writer.writeCollectionOfObjectValues<Asyncoperation>("workflowbinary_AsyncOperations", this.workflowbinary_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("workflowbinary_BulkDeleteFailures", this.workflowbinary_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Fileattachment>("workflowbinary_FileAttachments", this.workflowbinary_FileAttachments);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("workflowbinary_MailboxTrackingFolders", this.workflowbinary_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("workflowbinary_PrincipalObjectAttributeAccesses", this.workflowbinary_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("workflowbinary_ProcessSession", this.workflowbinary_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("workflowbinary_SyncErrors", this.workflowbinary_SyncErrors);
        writer.writeStringValue("workflowbinaryid", this.workflowbinaryid);
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
     * Gets the type property value. 
     * @returns a string
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the type property value. 
     * @param value Value to set for the type property.
     */
    public set type(value: string | undefined) {
        this._type = value;
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
    /**
     * Gets the workflowbinary_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get workflowbinary_AsyncOperations() {
        return this._workflowbinary_AsyncOperations;
    };
    /**
     * Sets the workflowbinary_AsyncOperations property value. 
     * @param value Value to set for the workflowbinary_AsyncOperations property.
     */
    public set workflowbinary_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._workflowbinary_AsyncOperations = value;
    };
    /**
     * Gets the workflowbinary_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get workflowbinary_BulkDeleteFailures() {
        return this._workflowbinary_BulkDeleteFailures;
    };
    /**
     * Sets the workflowbinary_BulkDeleteFailures property value. 
     * @param value Value to set for the workflowbinary_BulkDeleteFailures property.
     */
    public set workflowbinary_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._workflowbinary_BulkDeleteFailures = value;
    };
    /**
     * Gets the workflowbinary_FileAttachments property value. 
     * @returns a fileattachment
     */
    public get workflowbinary_FileAttachments() {
        return this._workflowbinary_FileAttachments;
    };
    /**
     * Sets the workflowbinary_FileAttachments property value. 
     * @param value Value to set for the workflowbinary_FileAttachments property.
     */
    public set workflowbinary_FileAttachments(value: Fileattachment[] | undefined) {
        this._workflowbinary_FileAttachments = value;
    };
    /**
     * Gets the workflowbinary_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get workflowbinary_MailboxTrackingFolders() {
        return this._workflowbinary_MailboxTrackingFolders;
    };
    /**
     * Sets the workflowbinary_MailboxTrackingFolders property value. 
     * @param value Value to set for the workflowbinary_MailboxTrackingFolders property.
     */
    public set workflowbinary_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._workflowbinary_MailboxTrackingFolders = value;
    };
    /**
     * Gets the workflowbinary_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get workflowbinary_PrincipalObjectAttributeAccesses() {
        return this._workflowbinary_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the workflowbinary_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the workflowbinary_PrincipalObjectAttributeAccesses property.
     */
    public set workflowbinary_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._workflowbinary_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the workflowbinary_ProcessSession property value. 
     * @returns a processsession
     */
    public get workflowbinary_ProcessSession() {
        return this._workflowbinary_ProcessSession;
    };
    /**
     * Sets the workflowbinary_ProcessSession property value. 
     * @param value Value to set for the workflowbinary_ProcessSession property.
     */
    public set workflowbinary_ProcessSession(value: Processsession[] | undefined) {
        this._workflowbinary_ProcessSession = value;
    };
    /**
     * Gets the workflowbinary_SyncErrors property value. 
     * @returns a syncerror
     */
    public get workflowbinary_SyncErrors() {
        return this._workflowbinary_SyncErrors;
    };
    /**
     * Sets the workflowbinary_SyncErrors property value. 
     * @param value Value to set for the workflowbinary_SyncErrors property.
     */
    public set workflowbinary_SyncErrors(value: Syncerror[] | undefined) {
        this._workflowbinary_SyncErrors = value;
    };
    /**
     * Gets the workflowbinaryid property value. 
     * @returns a string
     */
    public get workflowbinaryid() {
        return this._workflowbinaryid;
    };
    /**
     * Sets the workflowbinaryid property value. 
     * @param value Value to set for the workflowbinaryid property.
     */
    public set workflowbinaryid(value: string | undefined) {
        this._workflowbinaryid = value;
    };
}

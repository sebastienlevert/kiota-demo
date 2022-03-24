import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {createUii_hostedapplicationFromDiscriminatorValue} from './createUii_hostedapplicationFromDiscriminatorValue';
import {createUii_workflowFromDiscriminatorValue} from './createUii_workflowFromDiscriminatorValue';
import {createUii_workflowstepFromDiscriminatorValue} from './createUii_workflowstepFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Mailboxtrackingfolder, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team, Uii_hostedapplication, Uii_workflow, Uii_workflowstep} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Uii_audit extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private __uii_applicationid_value?: string | undefined;
    private __uii_workflowactivestepid_value?: string | undefined;
    private __uii_workflowid_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _uii_actiondata?: string | undefined;
    private _uii_actionname?: string | undefined;
    private _uii_activityid?: number | undefined;
    private _uii_agentstate?: string | undefined;
    private _uii_applicationid?: Uii_hostedapplication | undefined;
    private _uii_audit_AsyncOperations?: Asyncoperation[] | undefined;
    private _uii_audit_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _uii_audit_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _uii_audit_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _uii_audit_ProcessSession?: Processsession[] | undefined;
    private _uii_audit_SyncErrors?: Syncerror[] | undefined;
    private _uii_auditid?: string | undefined;
    private _uii_clienttimezone?: number | undefined;
    private _uii_contextid?: string | undefined;
    private _uii_currenttime?: Date | undefined;
    private _uii_customerid?: string | undefined;
    private _uii_machinename?: string | undefined;
    private _uii_name?: string | undefined;
    private _uii_targetapplication?: string | undefined;
    private _uii_workflowactivestepid?: Uii_workflowstep | undefined;
    private _uii_workflowid?: Uii_workflow | undefined;
    private _uii_workflowstatus?: string | undefined;
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
     * Gets the _uii_applicationid_value property value. 
     * @returns a string
     */
    public get _uii_applicationid_value() {
        return this.__uii_applicationid_value;
    };
    /**
     * Sets the _uii_applicationid_value property value. 
     * @param value Value to set for the _uii_applicationid_value property.
     */
    public set _uii_applicationid_value(value: string | undefined) {
        this.__uii_applicationid_value = value;
    };
    /**
     * Gets the _uii_workflowactivestepid_value property value. 
     * @returns a string
     */
    public get _uii_workflowactivestepid_value() {
        return this.__uii_workflowactivestepid_value;
    };
    /**
     * Sets the _uii_workflowactivestepid_value property value. 
     * @param value Value to set for the _uii_workflowactivestepid_value property.
     */
    public set _uii_workflowactivestepid_value(value: string | undefined) {
        this.__uii_workflowactivestepid_value = value;
    };
    /**
     * Gets the _uii_workflowid_value property value. 
     * @returns a string
     */
    public get _uii_workflowid_value() {
        return this.__uii_workflowid_value;
    };
    /**
     * Sets the _uii_workflowid_value property value. 
     * @param value Value to set for the _uii_workflowid_value property.
     */
    public set _uii_workflowid_value(value: string | undefined) {
        this.__uii_workflowid_value = value;
    };
    /**
     * Instantiates a new uii_audit and sets the default values.
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
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Uii_audit)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Uii_audit)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Uii_audit)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Uii_audit)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Uii_audit)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Uii_audit)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Uii_audit)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Uii_audit)._owninguser_value = n.getStringValue(); },
            "_uii_applicationid_value": (o, n) => { (o as unknown as Uii_audit)._uii_applicationid_value = n.getStringValue(); },
            "_uii_workflowactivestepid_value": (o, n) => { (o as unknown as Uii_audit)._uii_workflowactivestepid_value = n.getStringValue(); },
            "_uii_workflowid_value": (o, n) => { (o as unknown as Uii_audit)._uii_workflowid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Uii_audit).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Uii_audit).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Uii_audit).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Uii_audit).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Uii_audit).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Uii_audit).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Uii_audit).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Uii_audit).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Uii_audit).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Uii_audit).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Uii_audit).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Uii_audit).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Uii_audit).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Uii_audit).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Uii_audit).timezoneruleversionnumber = n.getNumberValue(); },
            "uii_actiondata": (o, n) => { (o as unknown as Uii_audit).uii_actiondata = n.getStringValue(); },
            "uii_actionname": (o, n) => { (o as unknown as Uii_audit).uii_actionname = n.getStringValue(); },
            "uii_activityid": (o, n) => { (o as unknown as Uii_audit).uii_activityid = n.getNumberValue(); },
            "uii_agentstate": (o, n) => { (o as unknown as Uii_audit).uii_agentstate = n.getStringValue(); },
            "uii_applicationid": (o, n) => { (o as unknown as Uii_audit).uii_applicationid = n.getObjectValue<Uii_hostedapplication>(createUii_hostedapplicationFromDiscriminatorValue); },
            "uii_audit_AsyncOperations": (o, n) => { (o as unknown as Uii_audit).uii_audit_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "uii_audit_BulkDeleteFailures": (o, n) => { (o as unknown as Uii_audit).uii_audit_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "uii_audit_MailboxTrackingFolders": (o, n) => { (o as unknown as Uii_audit).uii_audit_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "uii_audit_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Uii_audit).uii_audit_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "uii_audit_ProcessSession": (o, n) => { (o as unknown as Uii_audit).uii_audit_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "uii_audit_SyncErrors": (o, n) => { (o as unknown as Uii_audit).uii_audit_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "uii_auditid": (o, n) => { (o as unknown as Uii_audit).uii_auditid = n.getStringValue(); },
            "uii_clienttimezone": (o, n) => { (o as unknown as Uii_audit).uii_clienttimezone = n.getNumberValue(); },
            "uii_contextid": (o, n) => { (o as unknown as Uii_audit).uii_contextid = n.getStringValue(); },
            "uii_currenttime": (o, n) => { (o as unknown as Uii_audit).uii_currenttime = n.getDateValue(); },
            "uii_customerid": (o, n) => { (o as unknown as Uii_audit).uii_customerid = n.getStringValue(); },
            "uii_machinename": (o, n) => { (o as unknown as Uii_audit).uii_machinename = n.getStringValue(); },
            "uii_name": (o, n) => { (o as unknown as Uii_audit).uii_name = n.getStringValue(); },
            "uii_targetapplication": (o, n) => { (o as unknown as Uii_audit).uii_targetapplication = n.getStringValue(); },
            "uii_workflowactivestepid": (o, n) => { (o as unknown as Uii_audit).uii_workflowactivestepid = n.getObjectValue<Uii_workflowstep>(createUii_workflowstepFromDiscriminatorValue); },
            "uii_workflowid": (o, n) => { (o as unknown as Uii_audit).uii_workflowid = n.getObjectValue<Uii_workflow>(createUii_workflowFromDiscriminatorValue); },
            "uii_workflowstatus": (o, n) => { (o as unknown as Uii_audit).uii_workflowstatus = n.getStringValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Uii_audit).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Uii_audit).versionnumber = n.getNumberValue(); },
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeStringValue("_uii_applicationid_value", this._uii_applicationid_value);
        writer.writeStringValue("_uii_workflowactivestepid_value", this._uii_workflowactivestepid_value);
        writer.writeStringValue("_uii_workflowid_value", this._uii_workflowid_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeStringValue("uii_actiondata", this.uii_actiondata);
        writer.writeStringValue("uii_actionname", this.uii_actionname);
        writer.writeNumberValue("uii_activityid", this.uii_activityid);
        writer.writeStringValue("uii_agentstate", this.uii_agentstate);
        writer.writeObjectValue<Uii_hostedapplication>("uii_applicationid", this.uii_applicationid);
        writer.writeCollectionOfObjectValues<Asyncoperation>("uii_audit_AsyncOperations", this.uii_audit_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("uii_audit_BulkDeleteFailures", this.uii_audit_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("uii_audit_MailboxTrackingFolders", this.uii_audit_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("uii_audit_PrincipalObjectAttributeAccesses", this.uii_audit_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("uii_audit_ProcessSession", this.uii_audit_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("uii_audit_SyncErrors", this.uii_audit_SyncErrors);
        writer.writeStringValue("uii_auditid", this.uii_auditid);
        writer.writeNumberValue("uii_clienttimezone", this.uii_clienttimezone);
        writer.writeStringValue("uii_contextid", this.uii_contextid);
        writer.writeDateValue("uii_currenttime", this.uii_currenttime);
        writer.writeStringValue("uii_customerid", this.uii_customerid);
        writer.writeStringValue("uii_machinename", this.uii_machinename);
        writer.writeStringValue("uii_name", this.uii_name);
        writer.writeStringValue("uii_targetapplication", this.uii_targetapplication);
        writer.writeObjectValue<Uii_workflowstep>("uii_workflowactivestepid", this.uii_workflowactivestepid);
        writer.writeObjectValue<Uii_workflow>("uii_workflowid", this.uii_workflowid);
        writer.writeStringValue("uii_workflowstatus", this.uii_workflowstatus);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
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
     * Gets the uii_actiondata property value. 
     * @returns a string
     */
    public get uii_actiondata() {
        return this._uii_actiondata;
    };
    /**
     * Sets the uii_actiondata property value. 
     * @param value Value to set for the uii_actiondata property.
     */
    public set uii_actiondata(value: string | undefined) {
        this._uii_actiondata = value;
    };
    /**
     * Gets the uii_actionname property value. 
     * @returns a string
     */
    public get uii_actionname() {
        return this._uii_actionname;
    };
    /**
     * Sets the uii_actionname property value. 
     * @param value Value to set for the uii_actionname property.
     */
    public set uii_actionname(value: string | undefined) {
        this._uii_actionname = value;
    };
    /**
     * Gets the uii_activityid property value. 
     * @returns a integer
     */
    public get uii_activityid() {
        return this._uii_activityid;
    };
    /**
     * Sets the uii_activityid property value. 
     * @param value Value to set for the uii_activityid property.
     */
    public set uii_activityid(value: number | undefined) {
        this._uii_activityid = value;
    };
    /**
     * Gets the uii_agentstate property value. 
     * @returns a string
     */
    public get uii_agentstate() {
        return this._uii_agentstate;
    };
    /**
     * Sets the uii_agentstate property value. 
     * @param value Value to set for the uii_agentstate property.
     */
    public set uii_agentstate(value: string | undefined) {
        this._uii_agentstate = value;
    };
    /**
     * Gets the uii_applicationid property value. 
     * @returns a uii_hostedapplication
     */
    public get uii_applicationid() {
        return this._uii_applicationid;
    };
    /**
     * Sets the uii_applicationid property value. 
     * @param value Value to set for the uii_applicationid property.
     */
    public set uii_applicationid(value: Uii_hostedapplication | undefined) {
        this._uii_applicationid = value;
    };
    /**
     * Gets the uii_audit_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get uii_audit_AsyncOperations() {
        return this._uii_audit_AsyncOperations;
    };
    /**
     * Sets the uii_audit_AsyncOperations property value. 
     * @param value Value to set for the uii_audit_AsyncOperations property.
     */
    public set uii_audit_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._uii_audit_AsyncOperations = value;
    };
    /**
     * Gets the uii_audit_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get uii_audit_BulkDeleteFailures() {
        return this._uii_audit_BulkDeleteFailures;
    };
    /**
     * Sets the uii_audit_BulkDeleteFailures property value. 
     * @param value Value to set for the uii_audit_BulkDeleteFailures property.
     */
    public set uii_audit_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._uii_audit_BulkDeleteFailures = value;
    };
    /**
     * Gets the uii_audit_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get uii_audit_MailboxTrackingFolders() {
        return this._uii_audit_MailboxTrackingFolders;
    };
    /**
     * Sets the uii_audit_MailboxTrackingFolders property value. 
     * @param value Value to set for the uii_audit_MailboxTrackingFolders property.
     */
    public set uii_audit_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._uii_audit_MailboxTrackingFolders = value;
    };
    /**
     * Gets the uii_audit_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get uii_audit_PrincipalObjectAttributeAccesses() {
        return this._uii_audit_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the uii_audit_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the uii_audit_PrincipalObjectAttributeAccesses property.
     */
    public set uii_audit_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._uii_audit_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the uii_audit_ProcessSession property value. 
     * @returns a processsession
     */
    public get uii_audit_ProcessSession() {
        return this._uii_audit_ProcessSession;
    };
    /**
     * Sets the uii_audit_ProcessSession property value. 
     * @param value Value to set for the uii_audit_ProcessSession property.
     */
    public set uii_audit_ProcessSession(value: Processsession[] | undefined) {
        this._uii_audit_ProcessSession = value;
    };
    /**
     * Gets the uii_audit_SyncErrors property value. 
     * @returns a syncerror
     */
    public get uii_audit_SyncErrors() {
        return this._uii_audit_SyncErrors;
    };
    /**
     * Sets the uii_audit_SyncErrors property value. 
     * @param value Value to set for the uii_audit_SyncErrors property.
     */
    public set uii_audit_SyncErrors(value: Syncerror[] | undefined) {
        this._uii_audit_SyncErrors = value;
    };
    /**
     * Gets the uii_auditid property value. 
     * @returns a string
     */
    public get uii_auditid() {
        return this._uii_auditid;
    };
    /**
     * Sets the uii_auditid property value. 
     * @param value Value to set for the uii_auditid property.
     */
    public set uii_auditid(value: string | undefined) {
        this._uii_auditid = value;
    };
    /**
     * Gets the uii_clienttimezone property value. 
     * @returns a integer
     */
    public get uii_clienttimezone() {
        return this._uii_clienttimezone;
    };
    /**
     * Sets the uii_clienttimezone property value. 
     * @param value Value to set for the uii_clienttimezone property.
     */
    public set uii_clienttimezone(value: number | undefined) {
        this._uii_clienttimezone = value;
    };
    /**
     * Gets the uii_contextid property value. 
     * @returns a string
     */
    public get uii_contextid() {
        return this._uii_contextid;
    };
    /**
     * Sets the uii_contextid property value. 
     * @param value Value to set for the uii_contextid property.
     */
    public set uii_contextid(value: string | undefined) {
        this._uii_contextid = value;
    };
    /**
     * Gets the uii_currenttime property value. 
     * @returns a Date
     */
    public get uii_currenttime() {
        return this._uii_currenttime;
    };
    /**
     * Sets the uii_currenttime property value. 
     * @param value Value to set for the uii_currenttime property.
     */
    public set uii_currenttime(value: Date | undefined) {
        this._uii_currenttime = value;
    };
    /**
     * Gets the uii_customerid property value. 
     * @returns a string
     */
    public get uii_customerid() {
        return this._uii_customerid;
    };
    /**
     * Sets the uii_customerid property value. 
     * @param value Value to set for the uii_customerid property.
     */
    public set uii_customerid(value: string | undefined) {
        this._uii_customerid = value;
    };
    /**
     * Gets the uii_machinename property value. 
     * @returns a string
     */
    public get uii_machinename() {
        return this._uii_machinename;
    };
    /**
     * Sets the uii_machinename property value. 
     * @param value Value to set for the uii_machinename property.
     */
    public set uii_machinename(value: string | undefined) {
        this._uii_machinename = value;
    };
    /**
     * Gets the uii_name property value. 
     * @returns a string
     */
    public get uii_name() {
        return this._uii_name;
    };
    /**
     * Sets the uii_name property value. 
     * @param value Value to set for the uii_name property.
     */
    public set uii_name(value: string | undefined) {
        this._uii_name = value;
    };
    /**
     * Gets the uii_targetapplication property value. 
     * @returns a string
     */
    public get uii_targetapplication() {
        return this._uii_targetapplication;
    };
    /**
     * Sets the uii_targetapplication property value. 
     * @param value Value to set for the uii_targetapplication property.
     */
    public set uii_targetapplication(value: string | undefined) {
        this._uii_targetapplication = value;
    };
    /**
     * Gets the uii_workflowactivestepid property value. 
     * @returns a uii_workflowstep
     */
    public get uii_workflowactivestepid() {
        return this._uii_workflowactivestepid;
    };
    /**
     * Sets the uii_workflowactivestepid property value. 
     * @param value Value to set for the uii_workflowactivestepid property.
     */
    public set uii_workflowactivestepid(value: Uii_workflowstep | undefined) {
        this._uii_workflowactivestepid = value;
    };
    /**
     * Gets the uii_workflowid property value. 
     * @returns a uii_workflow
     */
    public get uii_workflowid() {
        return this._uii_workflowid;
    };
    /**
     * Sets the uii_workflowid property value. 
     * @param value Value to set for the uii_workflowid property.
     */
    public set uii_workflowid(value: Uii_workflow | undefined) {
        this._uii_workflowid = value;
    };
    /**
     * Gets the uii_workflowstatus property value. 
     * @returns a string
     */
    public get uii_workflowstatus() {
        return this._uii_workflowstatus;
    };
    /**
     * Sets the uii_workflowstatus property value. 
     * @param value Value to set for the uii_workflowstatus property.
     */
    public set uii_workflowstatus(value: string | undefined) {
        this._uii_workflowstatus = value;
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

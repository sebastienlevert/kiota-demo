import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBooleanManagedPropertyFromDiscriminatorValue} from './createBooleanManagedPropertyFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createFieldsecurityprofileFromDiscriminatorValue} from './createFieldsecurityprofileFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createRoleFromDiscriminatorValue} from './createRoleFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Asyncoperation, BooleanManagedProperty, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Fieldsecurityprofile, Mailboxtrackingfolder, Principalobjectattributeaccess, Processsession, Role, Syncerror, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Applicationuser extends Crmbaseentity implements Parsable {
    private __businessunitid_value?: string | undefined;
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private _applicationid?: string | undefined;
    private _applicationname?: string | undefined;
    private _applicationtype?: number | undefined;
    private _applicationuser_AsyncOperations?: Asyncoperation[] | undefined;
    private _applicationuser_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _applicationuser_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _applicationuser_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _applicationuser_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _applicationuser_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _applicationuser_ProcessSession?: Processsession[] | undefined;
    private _applicationuser_SyncErrors?: Syncerror[] | undefined;
    private _applicationuserid?: string | undefined;
    private _applicationuserprofile?: Fieldsecurityprofile[] | undefined;
    private _applicationuserrole?: Role[] | undefined;
    private _businessunitid?: Businessunit | undefined;
    private _canimpersonateassystemuser?: boolean | undefined;
    private _componentidunique?: string | undefined;
    private _componentstate?: number | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _iscustomizable?: BooleanManagedProperty | undefined;
    private _ismanaged?: boolean | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _overwritetime?: Date | undefined;
    private _solutionid?: string | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _versionnumber?: number | undefined;
    /**
     * Gets the _businessunitid_value property value. 
     * @returns a string
     */
    public get _businessunitid_value() {
        return this.__businessunitid_value;
    };
    /**
     * Sets the _businessunitid_value property value. 
     * @param value Value to set for the _businessunitid_value property.
     */
    public set _businessunitid_value(value: string | undefined) {
        this.__businessunitid_value = value;
    };
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
     * Gets the applicationid property value. 
     * @returns a string
     */
    public get applicationid() {
        return this._applicationid;
    };
    /**
     * Sets the applicationid property value. 
     * @param value Value to set for the applicationid property.
     */
    public set applicationid(value: string | undefined) {
        this._applicationid = value;
    };
    /**
     * Gets the applicationname property value. 
     * @returns a string
     */
    public get applicationname() {
        return this._applicationname;
    };
    /**
     * Sets the applicationname property value. 
     * @param value Value to set for the applicationname property.
     */
    public set applicationname(value: string | undefined) {
        this._applicationname = value;
    };
    /**
     * Gets the applicationtype property value. 
     * @returns a integer
     */
    public get applicationtype() {
        return this._applicationtype;
    };
    /**
     * Sets the applicationtype property value. 
     * @param value Value to set for the applicationtype property.
     */
    public set applicationtype(value: number | undefined) {
        this._applicationtype = value;
    };
    /**
     * Gets the applicationuser_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get applicationuser_AsyncOperations() {
        return this._applicationuser_AsyncOperations;
    };
    /**
     * Sets the applicationuser_AsyncOperations property value. 
     * @param value Value to set for the applicationuser_AsyncOperations property.
     */
    public set applicationuser_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._applicationuser_AsyncOperations = value;
    };
    /**
     * Gets the applicationuser_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get applicationuser_BulkDeleteFailures() {
        return this._applicationuser_BulkDeleteFailures;
    };
    /**
     * Sets the applicationuser_BulkDeleteFailures property value. 
     * @param value Value to set for the applicationuser_BulkDeleteFailures property.
     */
    public set applicationuser_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._applicationuser_BulkDeleteFailures = value;
    };
    /**
     * Gets the applicationuser_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get applicationuser_DuplicateBaseRecord() {
        return this._applicationuser_DuplicateBaseRecord;
    };
    /**
     * Sets the applicationuser_DuplicateBaseRecord property value. 
     * @param value Value to set for the applicationuser_DuplicateBaseRecord property.
     */
    public set applicationuser_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._applicationuser_DuplicateBaseRecord = value;
    };
    /**
     * Gets the applicationuser_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get applicationuser_DuplicateMatchingRecord() {
        return this._applicationuser_DuplicateMatchingRecord;
    };
    /**
     * Sets the applicationuser_DuplicateMatchingRecord property value. 
     * @param value Value to set for the applicationuser_DuplicateMatchingRecord property.
     */
    public set applicationuser_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._applicationuser_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the applicationuser_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get applicationuser_MailboxTrackingFolders() {
        return this._applicationuser_MailboxTrackingFolders;
    };
    /**
     * Sets the applicationuser_MailboxTrackingFolders property value. 
     * @param value Value to set for the applicationuser_MailboxTrackingFolders property.
     */
    public set applicationuser_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._applicationuser_MailboxTrackingFolders = value;
    };
    /**
     * Gets the applicationuser_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get applicationuser_PrincipalObjectAttributeAccesses() {
        return this._applicationuser_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the applicationuser_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the applicationuser_PrincipalObjectAttributeAccesses property.
     */
    public set applicationuser_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._applicationuser_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the applicationuser_ProcessSession property value. 
     * @returns a processsession
     */
    public get applicationuser_ProcessSession() {
        return this._applicationuser_ProcessSession;
    };
    /**
     * Sets the applicationuser_ProcessSession property value. 
     * @param value Value to set for the applicationuser_ProcessSession property.
     */
    public set applicationuser_ProcessSession(value: Processsession[] | undefined) {
        this._applicationuser_ProcessSession = value;
    };
    /**
     * Gets the applicationuser_SyncErrors property value. 
     * @returns a syncerror
     */
    public get applicationuser_SyncErrors() {
        return this._applicationuser_SyncErrors;
    };
    /**
     * Sets the applicationuser_SyncErrors property value. 
     * @param value Value to set for the applicationuser_SyncErrors property.
     */
    public set applicationuser_SyncErrors(value: Syncerror[] | undefined) {
        this._applicationuser_SyncErrors = value;
    };
    /**
     * Gets the applicationuserid property value. 
     * @returns a string
     */
    public get applicationuserid() {
        return this._applicationuserid;
    };
    /**
     * Sets the applicationuserid property value. 
     * @param value Value to set for the applicationuserid property.
     */
    public set applicationuserid(value: string | undefined) {
        this._applicationuserid = value;
    };
    /**
     * Gets the applicationuserprofile property value. 
     * @returns a fieldsecurityprofile
     */
    public get applicationuserprofile() {
        return this._applicationuserprofile;
    };
    /**
     * Sets the applicationuserprofile property value. 
     * @param value Value to set for the applicationuserprofile property.
     */
    public set applicationuserprofile(value: Fieldsecurityprofile[] | undefined) {
        this._applicationuserprofile = value;
    };
    /**
     * Gets the applicationuserrole property value. 
     * @returns a role
     */
    public get applicationuserrole() {
        return this._applicationuserrole;
    };
    /**
     * Sets the applicationuserrole property value. 
     * @param value Value to set for the applicationuserrole property.
     */
    public set applicationuserrole(value: Role[] | undefined) {
        this._applicationuserrole = value;
    };
    /**
     * Gets the businessunitid property value. 
     * @returns a businessunit
     */
    public get businessunitid() {
        return this._businessunitid;
    };
    /**
     * Sets the businessunitid property value. 
     * @param value Value to set for the businessunitid property.
     */
    public set businessunitid(value: Businessunit | undefined) {
        this._businessunitid = value;
    };
    /**
     * Gets the canimpersonateassystemuser property value. 
     * @returns a boolean
     */
    public get canimpersonateassystemuser() {
        return this._canimpersonateassystemuser;
    };
    /**
     * Sets the canimpersonateassystemuser property value. 
     * @param value Value to set for the canimpersonateassystemuser property.
     */
    public set canimpersonateassystemuser(value: boolean | undefined) {
        this._canimpersonateassystemuser = value;
    };
    /**
     * Gets the componentidunique property value. 
     * @returns a string
     */
    public get componentidunique() {
        return this._componentidunique;
    };
    /**
     * Sets the componentidunique property value. 
     * @param value Value to set for the componentidunique property.
     */
    public set componentidunique(value: string | undefined) {
        this._componentidunique = value;
    };
    /**
     * Gets the componentstate property value. 
     * @returns a integer
     */
    public get componentstate() {
        return this._componentstate;
    };
    /**
     * Sets the componentstate property value. 
     * @param value Value to set for the componentstate property.
     */
    public set componentstate(value: number | undefined) {
        this._componentstate = value;
    };
    /**
     * Instantiates a new applicationuser and sets the default values.
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
            "_businessunitid_value": (o, n) => { (o as unknown as Applicationuser)._businessunitid_value = n.getStringValue(); },
            "_createdby_value": (o, n) => { (o as unknown as Applicationuser)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Applicationuser)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Applicationuser)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Applicationuser)._modifiedonbehalfby_value = n.getStringValue(); },
            "applicationid": (o, n) => { (o as unknown as Applicationuser).applicationid = n.getStringValue(); },
            "applicationname": (o, n) => { (o as unknown as Applicationuser).applicationname = n.getStringValue(); },
            "applicationtype": (o, n) => { (o as unknown as Applicationuser).applicationtype = n.getNumberValue(); },
            "applicationuser_AsyncOperations": (o, n) => { (o as unknown as Applicationuser).applicationuser_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "applicationuser_BulkDeleteFailures": (o, n) => { (o as unknown as Applicationuser).applicationuser_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "applicationuser_DuplicateBaseRecord": (o, n) => { (o as unknown as Applicationuser).applicationuser_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "applicationuser_DuplicateMatchingRecord": (o, n) => { (o as unknown as Applicationuser).applicationuser_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "applicationuser_MailboxTrackingFolders": (o, n) => { (o as unknown as Applicationuser).applicationuser_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "applicationuser_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Applicationuser).applicationuser_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "applicationuser_ProcessSession": (o, n) => { (o as unknown as Applicationuser).applicationuser_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "applicationuser_SyncErrors": (o, n) => { (o as unknown as Applicationuser).applicationuser_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "applicationuserid": (o, n) => { (o as unknown as Applicationuser).applicationuserid = n.getStringValue(); },
            "applicationuserprofile": (o, n) => { (o as unknown as Applicationuser).applicationuserprofile = n.getCollectionOfObjectValues<Fieldsecurityprofile>(createFieldsecurityprofileFromDiscriminatorValue); },
            "applicationuserrole": (o, n) => { (o as unknown as Applicationuser).applicationuserrole = n.getCollectionOfObjectValues<Role>(createRoleFromDiscriminatorValue); },
            "businessunitid": (o, n) => { (o as unknown as Applicationuser).businessunitid = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "canimpersonateassystemuser": (o, n) => { (o as unknown as Applicationuser).canimpersonateassystemuser = n.getBooleanValue(); },
            "componentidunique": (o, n) => { (o as unknown as Applicationuser).componentidunique = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Applicationuser).componentstate = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Applicationuser).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Applicationuser).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Applicationuser).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Applicationuser).importsequencenumber = n.getNumberValue(); },
            "iscustomizable": (o, n) => { (o as unknown as Applicationuser).iscustomizable = n.getObjectValue<BooleanManagedProperty>(createBooleanManagedPropertyFromDiscriminatorValue); },
            "ismanaged": (o, n) => { (o as unknown as Applicationuser).ismanaged = n.getBooleanValue(); },
            "modifiedby": (o, n) => { (o as unknown as Applicationuser).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Applicationuser).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Applicationuser).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Applicationuser).overriddencreatedon = n.getDateValue(); },
            "overwritetime": (o, n) => { (o as unknown as Applicationuser).overwritetime = n.getDateValue(); },
            "solutionid": (o, n) => { (o as unknown as Applicationuser).solutionid = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Applicationuser).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Applicationuser).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Applicationuser).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Applicationuser).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Applicationuser).versionnumber = n.getNumberValue(); },
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
     * Gets the iscustomizable property value. 
     * @returns a BooleanManagedProperty
     */
    public get iscustomizable() {
        return this._iscustomizable;
    };
    /**
     * Sets the iscustomizable property value. 
     * @param value Value to set for the iscustomizable property.
     */
    public set iscustomizable(value: BooleanManagedProperty | undefined) {
        this._iscustomizable = value;
    };
    /**
     * Gets the ismanaged property value. 
     * @returns a boolean
     */
    public get ismanaged() {
        return this._ismanaged;
    };
    /**
     * Sets the ismanaged property value. 
     * @param value Value to set for the ismanaged property.
     */
    public set ismanaged(value: boolean | undefined) {
        this._ismanaged = value;
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
     * Gets the overwritetime property value. 
     * @returns a Date
     */
    public get overwritetime() {
        return this._overwritetime;
    };
    /**
     * Sets the overwritetime property value. 
     * @param value Value to set for the overwritetime property.
     */
    public set overwritetime(value: Date | undefined) {
        this._overwritetime = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_businessunitid_value", this._businessunitid_value);
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("applicationid", this.applicationid);
        writer.writeStringValue("applicationname", this.applicationname);
        writer.writeNumberValue("applicationtype", this.applicationtype);
        writer.writeCollectionOfObjectValues<Asyncoperation>("applicationuser_AsyncOperations", this.applicationuser_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("applicationuser_BulkDeleteFailures", this.applicationuser_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("applicationuser_DuplicateBaseRecord", this.applicationuser_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("applicationuser_DuplicateMatchingRecord", this.applicationuser_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("applicationuser_MailboxTrackingFolders", this.applicationuser_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("applicationuser_PrincipalObjectAttributeAccesses", this.applicationuser_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("applicationuser_ProcessSession", this.applicationuser_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("applicationuser_SyncErrors", this.applicationuser_SyncErrors);
        writer.writeStringValue("applicationuserid", this.applicationuserid);
        writer.writeCollectionOfObjectValues<Fieldsecurityprofile>("applicationuserprofile", this.applicationuserprofile);
        writer.writeCollectionOfObjectValues<Role>("applicationuserrole", this.applicationuserrole);
        writer.writeObjectValue<Businessunit>("businessunitid", this.businessunitid);
        writer.writeBooleanValue("canimpersonateassystemuser", this.canimpersonateassystemuser);
        writer.writeStringValue("componentidunique", this.componentidunique);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<BooleanManagedProperty>("iscustomizable", this.iscustomizable);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeStringValue("solutionid", this.solutionid);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the solutionid property value. 
     * @returns a string
     */
    public get solutionid() {
        return this._solutionid;
    };
    /**
     * Sets the solutionid property value. 
     * @param value Value to set for the solutionid property.
     */
    public set solutionid(value: string | undefined) {
        this._solutionid = value;
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

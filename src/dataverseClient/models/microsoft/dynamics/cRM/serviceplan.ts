import {createAppmoduleFromDiscriminatorValue} from './createAppmoduleFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBooleanManagedPropertyFromDiscriminatorValue} from './createBooleanManagedPropertyFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createServiceplanmappingFromDiscriminatorValue} from './createServiceplanmappingFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Appmodule, Asyncoperation, BooleanManagedProperty, Bulkdeletefailure, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Principalobjectattributeaccess, Processsession, Serviceplanmapping, Syncerror, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Serviceplan extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private _accessmode?: number | undefined;
    private _componentidunique?: string | undefined;
    private _componentstate?: number | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _displayname?: string | undefined;
    private _importsequencenumber?: number | undefined;
    private _iscustomizable?: BooleanManagedProperty | undefined;
    private _ismanaged?: boolean | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _moreinfourl?: string | undefined;
    private _name?: string | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _overwritetime?: Date | undefined;
    private _serviceplan_appmodule_association?: Appmodule[] | undefined;
    private _serviceplan_AsyncOperations?: Asyncoperation[] | undefined;
    private _serviceplan_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _serviceplan_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _serviceplan_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _serviceplan_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _serviceplan_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _serviceplan_ProcessSession?: Processsession[] | undefined;
    private _serviceplan_serviceplanmapping?: Serviceplanmapping[] | undefined;
    private _serviceplan_SyncErrors?: Syncerror[] | undefined;
    private _serviceplanid?: string | undefined;
    private _solutionid?: string | undefined;
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
     * Gets the accessmode property value. 
     * @returns a integer
     */
    public get accessmode() {
        return this._accessmode;
    };
    /**
     * Sets the accessmode property value. 
     * @param value Value to set for the accessmode property.
     */
    public set accessmode(value: number | undefined) {
        this._accessmode = value;
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
     * Instantiates a new serviceplan and sets the default values.
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
     * Gets the displayname property value. 
     * @returns a string
     */
    public get displayname() {
        return this._displayname;
    };
    /**
     * Sets the displayname property value. 
     * @param value Value to set for the displayname property.
     */
    public set displayname(value: string | undefined) {
        this._displayname = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Serviceplan)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Serviceplan)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Serviceplan)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Serviceplan)._modifiedonbehalfby_value = n.getStringValue(); },
            "accessmode": (o, n) => { (o as unknown as Serviceplan).accessmode = n.getNumberValue(); },
            "componentidunique": (o, n) => { (o as unknown as Serviceplan).componentidunique = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Serviceplan).componentstate = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Serviceplan).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Serviceplan).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Serviceplan).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "displayname": (o, n) => { (o as unknown as Serviceplan).displayname = n.getStringValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Serviceplan).importsequencenumber = n.getNumberValue(); },
            "iscustomizable": (o, n) => { (o as unknown as Serviceplan).iscustomizable = n.getObjectValue<BooleanManagedProperty>(createBooleanManagedPropertyFromDiscriminatorValue); },
            "ismanaged": (o, n) => { (o as unknown as Serviceplan).ismanaged = n.getBooleanValue(); },
            "modifiedby": (o, n) => { (o as unknown as Serviceplan).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Serviceplan).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Serviceplan).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "moreinfourl": (o, n) => { (o as unknown as Serviceplan).moreinfourl = n.getStringValue(); },
            "name": (o, n) => { (o as unknown as Serviceplan).name = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Serviceplan).overriddencreatedon = n.getDateValue(); },
            "overwritetime": (o, n) => { (o as unknown as Serviceplan).overwritetime = n.getDateValue(); },
            "serviceplan_appmodule_association": (o, n) => { (o as unknown as Serviceplan).serviceplan_appmodule_association = n.getCollectionOfObjectValues<Appmodule>(createAppmoduleFromDiscriminatorValue); },
            "serviceplan_AsyncOperations": (o, n) => { (o as unknown as Serviceplan).serviceplan_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "serviceplan_BulkDeleteFailures": (o, n) => { (o as unknown as Serviceplan).serviceplan_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "serviceplan_DuplicateBaseRecord": (o, n) => { (o as unknown as Serviceplan).serviceplan_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "serviceplan_DuplicateMatchingRecord": (o, n) => { (o as unknown as Serviceplan).serviceplan_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "serviceplan_MailboxTrackingFolders": (o, n) => { (o as unknown as Serviceplan).serviceplan_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "serviceplan_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Serviceplan).serviceplan_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "serviceplan_ProcessSession": (o, n) => { (o as unknown as Serviceplan).serviceplan_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "serviceplan_serviceplanmapping": (o, n) => { (o as unknown as Serviceplan).serviceplan_serviceplanmapping = n.getCollectionOfObjectValues<Serviceplanmapping>(createServiceplanmappingFromDiscriminatorValue); },
            "serviceplan_SyncErrors": (o, n) => { (o as unknown as Serviceplan).serviceplan_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "serviceplanid": (o, n) => { (o as unknown as Serviceplan).serviceplanid = n.getStringValue(); },
            "solutionid": (o, n) => { (o as unknown as Serviceplan).solutionid = n.getStringValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Serviceplan).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Serviceplan).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Serviceplan).versionnumber = n.getNumberValue(); },
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
     * Gets the moreinfourl property value. 
     * @returns a string
     */
    public get moreinfourl() {
        return this._moreinfourl;
    };
    /**
     * Sets the moreinfourl property value. 
     * @param value Value to set for the moreinfourl property.
     */
    public set moreinfourl(value: string | undefined) {
        this._moreinfourl = value;
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
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeNumberValue("accessmode", this.accessmode);
        writer.writeStringValue("componentidunique", this.componentidunique);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeStringValue("displayname", this.displayname);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<BooleanManagedProperty>("iscustomizable", this.iscustomizable);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("moreinfourl", this.moreinfourl);
        writer.writeStringValue("name", this.name);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeCollectionOfObjectValues<Appmodule>("serviceplan_appmodule_association", this.serviceplan_appmodule_association);
        writer.writeCollectionOfObjectValues<Asyncoperation>("serviceplan_AsyncOperations", this.serviceplan_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("serviceplan_BulkDeleteFailures", this.serviceplan_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("serviceplan_DuplicateBaseRecord", this.serviceplan_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("serviceplan_DuplicateMatchingRecord", this.serviceplan_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("serviceplan_MailboxTrackingFolders", this.serviceplan_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("serviceplan_PrincipalObjectAttributeAccesses", this.serviceplan_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("serviceplan_ProcessSession", this.serviceplan_ProcessSession);
        writer.writeCollectionOfObjectValues<Serviceplanmapping>("serviceplan_serviceplanmapping", this.serviceplan_serviceplanmapping);
        writer.writeCollectionOfObjectValues<Syncerror>("serviceplan_SyncErrors", this.serviceplan_SyncErrors);
        writer.writeStringValue("serviceplanid", this.serviceplanid);
        writer.writeStringValue("solutionid", this.solutionid);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the serviceplan_appmodule_association property value. 
     * @returns a appmodule
     */
    public get serviceplan_appmodule_association() {
        return this._serviceplan_appmodule_association;
    };
    /**
     * Sets the serviceplan_appmodule_association property value. 
     * @param value Value to set for the serviceplan_appmodule_association property.
     */
    public set serviceplan_appmodule_association(value: Appmodule[] | undefined) {
        this._serviceplan_appmodule_association = value;
    };
    /**
     * Gets the serviceplan_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get serviceplan_AsyncOperations() {
        return this._serviceplan_AsyncOperations;
    };
    /**
     * Sets the serviceplan_AsyncOperations property value. 
     * @param value Value to set for the serviceplan_AsyncOperations property.
     */
    public set serviceplan_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._serviceplan_AsyncOperations = value;
    };
    /**
     * Gets the serviceplan_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get serviceplan_BulkDeleteFailures() {
        return this._serviceplan_BulkDeleteFailures;
    };
    /**
     * Sets the serviceplan_BulkDeleteFailures property value. 
     * @param value Value to set for the serviceplan_BulkDeleteFailures property.
     */
    public set serviceplan_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._serviceplan_BulkDeleteFailures = value;
    };
    /**
     * Gets the serviceplan_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get serviceplan_DuplicateBaseRecord() {
        return this._serviceplan_DuplicateBaseRecord;
    };
    /**
     * Sets the serviceplan_DuplicateBaseRecord property value. 
     * @param value Value to set for the serviceplan_DuplicateBaseRecord property.
     */
    public set serviceplan_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._serviceplan_DuplicateBaseRecord = value;
    };
    /**
     * Gets the serviceplan_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get serviceplan_DuplicateMatchingRecord() {
        return this._serviceplan_DuplicateMatchingRecord;
    };
    /**
     * Sets the serviceplan_DuplicateMatchingRecord property value. 
     * @param value Value to set for the serviceplan_DuplicateMatchingRecord property.
     */
    public set serviceplan_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._serviceplan_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the serviceplan_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get serviceplan_MailboxTrackingFolders() {
        return this._serviceplan_MailboxTrackingFolders;
    };
    /**
     * Sets the serviceplan_MailboxTrackingFolders property value. 
     * @param value Value to set for the serviceplan_MailboxTrackingFolders property.
     */
    public set serviceplan_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._serviceplan_MailboxTrackingFolders = value;
    };
    /**
     * Gets the serviceplan_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get serviceplan_PrincipalObjectAttributeAccesses() {
        return this._serviceplan_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the serviceplan_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the serviceplan_PrincipalObjectAttributeAccesses property.
     */
    public set serviceplan_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._serviceplan_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the serviceplan_ProcessSession property value. 
     * @returns a processsession
     */
    public get serviceplan_ProcessSession() {
        return this._serviceplan_ProcessSession;
    };
    /**
     * Sets the serviceplan_ProcessSession property value. 
     * @param value Value to set for the serviceplan_ProcessSession property.
     */
    public set serviceplan_ProcessSession(value: Processsession[] | undefined) {
        this._serviceplan_ProcessSession = value;
    };
    /**
     * Gets the serviceplan_serviceplanmapping property value. 
     * @returns a serviceplanmapping
     */
    public get serviceplan_serviceplanmapping() {
        return this._serviceplan_serviceplanmapping;
    };
    /**
     * Sets the serviceplan_serviceplanmapping property value. 
     * @param value Value to set for the serviceplan_serviceplanmapping property.
     */
    public set serviceplan_serviceplanmapping(value: Serviceplanmapping[] | undefined) {
        this._serviceplan_serviceplanmapping = value;
    };
    /**
     * Gets the serviceplan_SyncErrors property value. 
     * @returns a syncerror
     */
    public get serviceplan_SyncErrors() {
        return this._serviceplan_SyncErrors;
    };
    /**
     * Sets the serviceplan_SyncErrors property value. 
     * @param value Value to set for the serviceplan_SyncErrors property.
     */
    public set serviceplan_SyncErrors(value: Syncerror[] | undefined) {
        this._serviceplan_SyncErrors = value;
    };
    /**
     * Gets the serviceplanid property value. 
     * @returns a string
     */
    public get serviceplanid() {
        return this._serviceplanid;
    };
    /**
     * Sets the serviceplanid property value. 
     * @param value Value to set for the serviceplanid property.
     */
    public set serviceplanid(value: string | undefined) {
        this._serviceplanid = value;
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

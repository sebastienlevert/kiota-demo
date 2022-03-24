import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSolutionFromDiscriminatorValue} from './createSolutionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Organization, Principalobjectattributeaccess, Processsession, Solution, Syncerror, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Package extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private _appid?: string | undefined;
    private _applicationname?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _installedon?: Date | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _organizationid?: Organization | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _package_AsyncOperations?: Asyncoperation[] | undefined;
    private _package_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _package_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _package_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _package_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _package_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _package_ProcessSession?: Processsession[] | undefined;
    private _package_solution?: Solution[] | undefined;
    private _package_SyncErrors?: Syncerror[] | undefined;
    private _packageid?: string | undefined;
    private _packageinstanceid?: string | undefined;
    private _packageinstanceoperationid?: string | undefined;
    private _packageuniquename?: string | undefined;
    private _packageversion?: string | undefined;
    private _publisherid?: string | undefined;
    private _publishername?: string | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _tpspackageid?: string | undefined;
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
     * Gets the _organizationid_value property value. 
     * @returns a string
     */
    public get _organizationid_value() {
        return this.__organizationid_value;
    };
    /**
     * Sets the _organizationid_value property value. 
     * @param value Value to set for the _organizationid_value property.
     */
    public set _organizationid_value(value: string | undefined) {
        this.__organizationid_value = value;
    };
    /**
     * Gets the appid property value. 
     * @returns a string
     */
    public get appid() {
        return this._appid;
    };
    /**
     * Sets the appid property value. 
     * @param value Value to set for the appid property.
     */
    public set appid(value: string | undefined) {
        this._appid = value;
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
     * Instantiates a new package and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Package)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Package)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Package)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Package)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Package)._organizationid_value = n.getStringValue(); },
            "appid": (o, n) => { (o as unknown as Package).appid = n.getStringValue(); },
            "applicationname": (o, n) => { (o as unknown as Package).applicationname = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Package).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Package).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Package).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Package).importsequencenumber = n.getNumberValue(); },
            "installedon": (o, n) => { (o as unknown as Package).installedon = n.getDateValue(); },
            "modifiedby": (o, n) => { (o as unknown as Package).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Package).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Package).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "organizationid": (o, n) => { (o as unknown as Package).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Package).overriddencreatedon = n.getDateValue(); },
            "package_AsyncOperations": (o, n) => { (o as unknown as Package).package_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "package_BulkDeleteFailures": (o, n) => { (o as unknown as Package).package_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "package_DuplicateBaseRecord": (o, n) => { (o as unknown as Package).package_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "package_DuplicateMatchingRecord": (o, n) => { (o as unknown as Package).package_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "package_MailboxTrackingFolders": (o, n) => { (o as unknown as Package).package_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "package_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Package).package_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "package_ProcessSession": (o, n) => { (o as unknown as Package).package_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "package_solution": (o, n) => { (o as unknown as Package).package_solution = n.getCollectionOfObjectValues<Solution>(createSolutionFromDiscriminatorValue); },
            "package_SyncErrors": (o, n) => { (o as unknown as Package).package_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "packageid": (o, n) => { (o as unknown as Package).packageid = n.getStringValue(); },
            "packageinstanceid": (o, n) => { (o as unknown as Package).packageinstanceid = n.getStringValue(); },
            "packageinstanceoperationid": (o, n) => { (o as unknown as Package).packageinstanceoperationid = n.getStringValue(); },
            "packageuniquename": (o, n) => { (o as unknown as Package).packageuniquename = n.getStringValue(); },
            "packageversion": (o, n) => { (o as unknown as Package).packageversion = n.getStringValue(); },
            "publisherid": (o, n) => { (o as unknown as Package).publisherid = n.getStringValue(); },
            "publishername": (o, n) => { (o as unknown as Package).publishername = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Package).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Package).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Package).timezoneruleversionnumber = n.getNumberValue(); },
            "tpspackageid": (o, n) => { (o as unknown as Package).tpspackageid = n.getStringValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Package).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Package).versionnumber = n.getNumberValue(); },
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
     * Gets the installedon property value. 
     * @returns a Date
     */
    public get installedon() {
        return this._installedon;
    };
    /**
     * Sets the installedon property value. 
     * @param value Value to set for the installedon property.
     */
    public set installedon(value: Date | undefined) {
        this._installedon = value;
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
     * Gets the organizationid property value. 
     * @returns a organization
     */
    public get organizationid() {
        return this._organizationid;
    };
    /**
     * Sets the organizationid property value. 
     * @param value Value to set for the organizationid property.
     */
    public set organizationid(value: Organization | undefined) {
        this._organizationid = value;
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
     * Gets the package_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get package_AsyncOperations() {
        return this._package_AsyncOperations;
    };
    /**
     * Sets the package_AsyncOperations property value. 
     * @param value Value to set for the package_AsyncOperations property.
     */
    public set package_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._package_AsyncOperations = value;
    };
    /**
     * Gets the package_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get package_BulkDeleteFailures() {
        return this._package_BulkDeleteFailures;
    };
    /**
     * Sets the package_BulkDeleteFailures property value. 
     * @param value Value to set for the package_BulkDeleteFailures property.
     */
    public set package_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._package_BulkDeleteFailures = value;
    };
    /**
     * Gets the package_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get package_DuplicateBaseRecord() {
        return this._package_DuplicateBaseRecord;
    };
    /**
     * Sets the package_DuplicateBaseRecord property value. 
     * @param value Value to set for the package_DuplicateBaseRecord property.
     */
    public set package_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._package_DuplicateBaseRecord = value;
    };
    /**
     * Gets the package_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get package_DuplicateMatchingRecord() {
        return this._package_DuplicateMatchingRecord;
    };
    /**
     * Sets the package_DuplicateMatchingRecord property value. 
     * @param value Value to set for the package_DuplicateMatchingRecord property.
     */
    public set package_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._package_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the package_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get package_MailboxTrackingFolders() {
        return this._package_MailboxTrackingFolders;
    };
    /**
     * Sets the package_MailboxTrackingFolders property value. 
     * @param value Value to set for the package_MailboxTrackingFolders property.
     */
    public set package_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._package_MailboxTrackingFolders = value;
    };
    /**
     * Gets the package_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get package_PrincipalObjectAttributeAccesses() {
        return this._package_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the package_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the package_PrincipalObjectAttributeAccesses property.
     */
    public set package_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._package_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the package_ProcessSession property value. 
     * @returns a processsession
     */
    public get package_ProcessSession() {
        return this._package_ProcessSession;
    };
    /**
     * Sets the package_ProcessSession property value. 
     * @param value Value to set for the package_ProcessSession property.
     */
    public set package_ProcessSession(value: Processsession[] | undefined) {
        this._package_ProcessSession = value;
    };
    /**
     * Gets the package_solution property value. 
     * @returns a solution
     */
    public get package_solution() {
        return this._package_solution;
    };
    /**
     * Sets the package_solution property value. 
     * @param value Value to set for the package_solution property.
     */
    public set package_solution(value: Solution[] | undefined) {
        this._package_solution = value;
    };
    /**
     * Gets the package_SyncErrors property value. 
     * @returns a syncerror
     */
    public get package_SyncErrors() {
        return this._package_SyncErrors;
    };
    /**
     * Sets the package_SyncErrors property value. 
     * @param value Value to set for the package_SyncErrors property.
     */
    public set package_SyncErrors(value: Syncerror[] | undefined) {
        this._package_SyncErrors = value;
    };
    /**
     * Gets the packageid property value. 
     * @returns a string
     */
    public get packageid() {
        return this._packageid;
    };
    /**
     * Sets the packageid property value. 
     * @param value Value to set for the packageid property.
     */
    public set packageid(value: string | undefined) {
        this._packageid = value;
    };
    /**
     * Gets the packageinstanceid property value. 
     * @returns a string
     */
    public get packageinstanceid() {
        return this._packageinstanceid;
    };
    /**
     * Sets the packageinstanceid property value. 
     * @param value Value to set for the packageinstanceid property.
     */
    public set packageinstanceid(value: string | undefined) {
        this._packageinstanceid = value;
    };
    /**
     * Gets the packageinstanceoperationid property value. 
     * @returns a string
     */
    public get packageinstanceoperationid() {
        return this._packageinstanceoperationid;
    };
    /**
     * Sets the packageinstanceoperationid property value. 
     * @param value Value to set for the packageinstanceoperationid property.
     */
    public set packageinstanceoperationid(value: string | undefined) {
        this._packageinstanceoperationid = value;
    };
    /**
     * Gets the packageuniquename property value. 
     * @returns a string
     */
    public get packageuniquename() {
        return this._packageuniquename;
    };
    /**
     * Sets the packageuniquename property value. 
     * @param value Value to set for the packageuniquename property.
     */
    public set packageuniquename(value: string | undefined) {
        this._packageuniquename = value;
    };
    /**
     * Gets the packageversion property value. 
     * @returns a string
     */
    public get packageversion() {
        return this._packageversion;
    };
    /**
     * Sets the packageversion property value. 
     * @param value Value to set for the packageversion property.
     */
    public set packageversion(value: string | undefined) {
        this._packageversion = value;
    };
    /**
     * Gets the publisherid property value. 
     * @returns a string
     */
    public get publisherid() {
        return this._publisherid;
    };
    /**
     * Sets the publisherid property value. 
     * @param value Value to set for the publisherid property.
     */
    public set publisherid(value: string | undefined) {
        this._publisherid = value;
    };
    /**
     * Gets the publishername property value. 
     * @returns a string
     */
    public get publishername() {
        return this._publishername;
    };
    /**
     * Sets the publishername property value. 
     * @param value Value to set for the publishername property.
     */
    public set publishername(value: string | undefined) {
        this._publishername = value;
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
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeStringValue("appid", this.appid);
        writer.writeStringValue("applicationname", this.applicationname);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeDateValue("installedon", this.installedon);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeCollectionOfObjectValues<Asyncoperation>("package_AsyncOperations", this.package_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("package_BulkDeleteFailures", this.package_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("package_DuplicateBaseRecord", this.package_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("package_DuplicateMatchingRecord", this.package_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("package_MailboxTrackingFolders", this.package_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("package_PrincipalObjectAttributeAccesses", this.package_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("package_ProcessSession", this.package_ProcessSession);
        writer.writeCollectionOfObjectValues<Solution>("package_solution", this.package_solution);
        writer.writeCollectionOfObjectValues<Syncerror>("package_SyncErrors", this.package_SyncErrors);
        writer.writeStringValue("packageid", this.packageid);
        writer.writeStringValue("packageinstanceid", this.packageinstanceid);
        writer.writeStringValue("packageinstanceoperationid", this.packageinstanceoperationid);
        writer.writeStringValue("packageuniquename", this.packageuniquename);
        writer.writeStringValue("packageversion", this.packageversion);
        writer.writeStringValue("publisherid", this.publisherid);
        writer.writeStringValue("publishername", this.publishername);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeStringValue("tpspackageid", this.tpspackageid);
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
     * Gets the tpspackageid property value. 
     * @returns a string
     */
    public get tpspackageid() {
        return this._tpspackageid;
    };
    /**
     * Sets the tpspackageid property value. 
     * @param value Value to set for the tpspackageid property.
     */
    public set tpspackageid(value: string | undefined) {
        this._tpspackageid = value;
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

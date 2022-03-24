import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_surveyquestionFromDiscriminatorValue} from './createMsdyn_surveyquestionFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_surveyquestion, Organization, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_localizedsurveyquestion extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_surveyquestionid_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_description?: string | undefined;
    private _msdyn_languagecode?: number | undefined;
    private _msdyn_localizedquestiontext?: string | undefined;
    private _msdyn_localizedsurveyquestion_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_localizedsurveyquestion_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_localizedsurveyquestion_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_localizedsurveyquestion_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_localizedsurveyquestion_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_localizedsurveyquestion_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_localizedsurveyquestion_ProcessSession?: Processsession[] | undefined;
    private _msdyn_localizedsurveyquestion_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_localizedsurveyquestionid?: string | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_SurveyQuestionId?: Msdyn_surveyquestion | undefined;
    private _organizationid?: Organization | undefined;
    private _overriddencreatedon?: Date | undefined;
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
     * Gets the _msdyn_surveyquestionid_value property value. 
     * @returns a string
     */
    public get _msdyn_surveyquestionid_value() {
        return this.__msdyn_surveyquestionid_value;
    };
    /**
     * Sets the _msdyn_surveyquestionid_value property value. 
     * @param value Value to set for the _msdyn_surveyquestionid_value property.
     */
    public set _msdyn_surveyquestionid_value(value: string | undefined) {
        this.__msdyn_surveyquestionid_value = value;
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
     * Instantiates a new msdyn_localizedsurveyquestion and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_localizedsurveyquestion)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_localizedsurveyquestion)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_localizedsurveyquestion)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_localizedsurveyquestion)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_surveyquestionid_value": (o, n) => { (o as unknown as Msdyn_localizedsurveyquestion)._msdyn_surveyquestionid_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Msdyn_localizedsurveyquestion)._organizationid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_localizedsurveyquestion).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_localizedsurveyquestion).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_localizedsurveyquestion).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_localizedsurveyquestion).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_localizedsurveyquestion).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_localizedsurveyquestion).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_localizedsurveyquestion).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_description": (o, n) => { (o as unknown as Msdyn_localizedsurveyquestion).msdyn_description = n.getStringValue(); },
            "msdyn_languagecode": (o, n) => { (o as unknown as Msdyn_localizedsurveyquestion).msdyn_languagecode = n.getNumberValue(); },
            "msdyn_localizedquestiontext": (o, n) => { (o as unknown as Msdyn_localizedsurveyquestion).msdyn_localizedquestiontext = n.getStringValue(); },
            "msdyn_localizedsurveyquestion_AsyncOperations": (o, n) => { (o as unknown as Msdyn_localizedsurveyquestion).msdyn_localizedsurveyquestion_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_localizedsurveyquestion_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_localizedsurveyquestion).msdyn_localizedsurveyquestion_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_localizedsurveyquestion_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_localizedsurveyquestion).msdyn_localizedsurveyquestion_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_localizedsurveyquestion_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_localizedsurveyquestion).msdyn_localizedsurveyquestion_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_localizedsurveyquestion_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_localizedsurveyquestion).msdyn_localizedsurveyquestion_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_localizedsurveyquestion_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_localizedsurveyquestion).msdyn_localizedsurveyquestion_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_localizedsurveyquestion_ProcessSession": (o, n) => { (o as unknown as Msdyn_localizedsurveyquestion).msdyn_localizedsurveyquestion_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_localizedsurveyquestion_SyncErrors": (o, n) => { (o as unknown as Msdyn_localizedsurveyquestion).msdyn_localizedsurveyquestion_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_localizedsurveyquestionid": (o, n) => { (o as unknown as Msdyn_localizedsurveyquestion).msdyn_localizedsurveyquestionid = n.getStringValue(); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_localizedsurveyquestion).msdyn_name = n.getStringValue(); },
            "msdyn_SurveyQuestionId": (o, n) => { (o as unknown as Msdyn_localizedsurveyquestion).msdyn_SurveyQuestionId = n.getObjectValue<Msdyn_surveyquestion>(createMsdyn_surveyquestionFromDiscriminatorValue); },
            "organizationid": (o, n) => { (o as unknown as Msdyn_localizedsurveyquestion).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_localizedsurveyquestion).overriddencreatedon = n.getDateValue(); },
            "statecode": (o, n) => { (o as unknown as Msdyn_localizedsurveyquestion).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_localizedsurveyquestion).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_localizedsurveyquestion).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_localizedsurveyquestion).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_localizedsurveyquestion).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_description property value. 
     * @returns a string
     */
    public get msdyn_description() {
        return this._msdyn_description;
    };
    /**
     * Sets the msdyn_description property value. 
     * @param value Value to set for the msdyn_description property.
     */
    public set msdyn_description(value: string | undefined) {
        this._msdyn_description = value;
    };
    /**
     * Gets the msdyn_languagecode property value. 
     * @returns a integer
     */
    public get msdyn_languagecode() {
        return this._msdyn_languagecode;
    };
    /**
     * Sets the msdyn_languagecode property value. 
     * @param value Value to set for the msdyn_languagecode property.
     */
    public set msdyn_languagecode(value: number | undefined) {
        this._msdyn_languagecode = value;
    };
    /**
     * Gets the msdyn_localizedquestiontext property value. 
     * @returns a string
     */
    public get msdyn_localizedquestiontext() {
        return this._msdyn_localizedquestiontext;
    };
    /**
     * Sets the msdyn_localizedquestiontext property value. 
     * @param value Value to set for the msdyn_localizedquestiontext property.
     */
    public set msdyn_localizedquestiontext(value: string | undefined) {
        this._msdyn_localizedquestiontext = value;
    };
    /**
     * Gets the msdyn_localizedsurveyquestion_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_localizedsurveyquestion_AsyncOperations() {
        return this._msdyn_localizedsurveyquestion_AsyncOperations;
    };
    /**
     * Sets the msdyn_localizedsurveyquestion_AsyncOperations property value. 
     * @param value Value to set for the msdyn_localizedsurveyquestion_AsyncOperations property.
     */
    public set msdyn_localizedsurveyquestion_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_localizedsurveyquestion_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_localizedsurveyquestion_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_localizedsurveyquestion_BulkDeleteFailures() {
        return this._msdyn_localizedsurveyquestion_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_localizedsurveyquestion_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_localizedsurveyquestion_BulkDeleteFailures property.
     */
    public set msdyn_localizedsurveyquestion_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_localizedsurveyquestion_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_localizedsurveyquestion_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_localizedsurveyquestion_DuplicateBaseRecord() {
        return this._msdyn_localizedsurveyquestion_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_localizedsurveyquestion_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_localizedsurveyquestion_DuplicateBaseRecord property.
     */
    public set msdyn_localizedsurveyquestion_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_localizedsurveyquestion_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_localizedsurveyquestion_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_localizedsurveyquestion_DuplicateMatchingRecord() {
        return this._msdyn_localizedsurveyquestion_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_localizedsurveyquestion_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_localizedsurveyquestion_DuplicateMatchingRecord property.
     */
    public set msdyn_localizedsurveyquestion_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_localizedsurveyquestion_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_localizedsurveyquestion_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_localizedsurveyquestion_MailboxTrackingFolders() {
        return this._msdyn_localizedsurveyquestion_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_localizedsurveyquestion_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_localizedsurveyquestion_MailboxTrackingFolders property.
     */
    public set msdyn_localizedsurveyquestion_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_localizedsurveyquestion_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_localizedsurveyquestion_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_localizedsurveyquestion_PrincipalObjectAttributeAccesses() {
        return this._msdyn_localizedsurveyquestion_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_localizedsurveyquestion_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_localizedsurveyquestion_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_localizedsurveyquestion_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_localizedsurveyquestion_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_localizedsurveyquestion_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_localizedsurveyquestion_ProcessSession() {
        return this._msdyn_localizedsurveyquestion_ProcessSession;
    };
    /**
     * Sets the msdyn_localizedsurveyquestion_ProcessSession property value. 
     * @param value Value to set for the msdyn_localizedsurveyquestion_ProcessSession property.
     */
    public set msdyn_localizedsurveyquestion_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_localizedsurveyquestion_ProcessSession = value;
    };
    /**
     * Gets the msdyn_localizedsurveyquestion_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_localizedsurveyquestion_SyncErrors() {
        return this._msdyn_localizedsurveyquestion_SyncErrors;
    };
    /**
     * Sets the msdyn_localizedsurveyquestion_SyncErrors property value. 
     * @param value Value to set for the msdyn_localizedsurveyquestion_SyncErrors property.
     */
    public set msdyn_localizedsurveyquestion_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_localizedsurveyquestion_SyncErrors = value;
    };
    /**
     * Gets the msdyn_localizedsurveyquestionid property value. 
     * @returns a string
     */
    public get msdyn_localizedsurveyquestionid() {
        return this._msdyn_localizedsurveyquestionid;
    };
    /**
     * Sets the msdyn_localizedsurveyquestionid property value. 
     * @param value Value to set for the msdyn_localizedsurveyquestionid property.
     */
    public set msdyn_localizedsurveyquestionid(value: string | undefined) {
        this._msdyn_localizedsurveyquestionid = value;
    };
    /**
     * Gets the msdyn_name property value. 
     * @returns a string
     */
    public get msdyn_name() {
        return this._msdyn_name;
    };
    /**
     * Sets the msdyn_name property value. 
     * @param value Value to set for the msdyn_name property.
     */
    public set msdyn_name(value: string | undefined) {
        this._msdyn_name = value;
    };
    /**
     * Gets the msdyn_SurveyQuestionId property value. 
     * @returns a msdyn_surveyquestion
     */
    public get msdyn_SurveyQuestionId() {
        return this._msdyn_SurveyQuestionId;
    };
    /**
     * Sets the msdyn_SurveyQuestionId property value. 
     * @param value Value to set for the msdyn_SurveyQuestionId property.
     */
    public set msdyn_SurveyQuestionId(value: Msdyn_surveyquestion | undefined) {
        this._msdyn_SurveyQuestionId = value;
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
        writer.writeStringValue("_msdyn_surveyquestionid_value", this._msdyn_surveyquestionid_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("msdyn_description", this.msdyn_description);
        writer.writeNumberValue("msdyn_languagecode", this.msdyn_languagecode);
        writer.writeStringValue("msdyn_localizedquestiontext", this.msdyn_localizedquestiontext);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_localizedsurveyquestion_AsyncOperations", this.msdyn_localizedsurveyquestion_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_localizedsurveyquestion_BulkDeleteFailures", this.msdyn_localizedsurveyquestion_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_localizedsurveyquestion_DuplicateBaseRecord", this.msdyn_localizedsurveyquestion_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_localizedsurveyquestion_DuplicateMatchingRecord", this.msdyn_localizedsurveyquestion_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_localizedsurveyquestion_MailboxTrackingFolders", this.msdyn_localizedsurveyquestion_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_localizedsurveyquestion_PrincipalObjectAttributeAccesses", this.msdyn_localizedsurveyquestion_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_localizedsurveyquestion_ProcessSession", this.msdyn_localizedsurveyquestion_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_localizedsurveyquestion_SyncErrors", this.msdyn_localizedsurveyquestion_SyncErrors);
        writer.writeStringValue("msdyn_localizedsurveyquestionid", this.msdyn_localizedsurveyquestionid);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeObjectValue<Msdyn_surveyquestion>("msdyn_SurveyQuestionId", this.msdyn_SurveyQuestionId);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
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

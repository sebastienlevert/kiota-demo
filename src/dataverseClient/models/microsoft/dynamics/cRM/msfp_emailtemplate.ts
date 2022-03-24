import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsfp_localizedemailtemplateFromDiscriminatorValue} from './createMsfp_localizedemailtemplateFromDiscriminatorValue';
import {createMsfp_surveyFromDiscriminatorValue} from './createMsfp_surveyFromDiscriminatorValue';
import {createMsfp_surveyreminderFromDiscriminatorValue} from './createMsfp_surveyreminderFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Mailboxtrackingfolder, Msfp_localizedemailtemplate, Msfp_survey, Msfp_surveyreminder, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msfp_emailtemplate extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msfp_survey_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msfp_candelete?: boolean | undefined;
    private _msfp_canedit?: boolean | undefined;
    private _msfp_canrename?: boolean | undefined;
    private _msfp_emailtemplate_AsyncOperations?: Asyncoperation[] | undefined;
    private _msfp_emailtemplate_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msfp_emailtemplate_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msfp_emailtemplate_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msfp_emailtemplate_ProcessSession?: Processsession[] | undefined;
    private _msfp_emailtemplate_SyncErrors?: Syncerror[] | undefined;
    private _msfp_emailtemplatebody?: string | undefined;
    private _msfp_emailtemplateid?: string | undefined;
    private _msfp_emailtemplatesubject?: string | undefined;
    private _msfp_language?: string | undefined;
    private _msfp_msfp_emailtemplate_msfp_localizedemailtem?: Msfp_localizedemailtemplate[] | undefined;
    private _msfp_msfp_emailtemplate_msfp_surveyreminder_emailtemplate?: Msfp_surveyreminder[] | undefined;
    private _msfp_name?: string | undefined;
    private _msfp_sourcesurveyidentifier?: string | undefined;
    private _msfp_survey?: Msfp_survey | undefined;
    private _msfp_tags?: string | undefined;
    private _msfp_templatetype?: number | undefined;
    private _msfp_version?: string | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
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
     * Gets the _msfp_survey_value property value. 
     * @returns a string
     */
    public get _msfp_survey_value() {
        return this.__msfp_survey_value;
    };
    /**
     * Sets the _msfp_survey_value property value. 
     * @param value Value to set for the _msfp_survey_value property.
     */
    public set _msfp_survey_value(value: string | undefined) {
        this.__msfp_survey_value = value;
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
     * Instantiates a new msfp_emailtemplate and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msfp_emailtemplate)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msfp_emailtemplate)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msfp_emailtemplate)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msfp_emailtemplate)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msfp_survey_value": (o, n) => { (o as unknown as Msfp_emailtemplate)._msfp_survey_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msfp_emailtemplate)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msfp_emailtemplate)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msfp_emailtemplate)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msfp_emailtemplate)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msfp_emailtemplate).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msfp_emailtemplate).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msfp_emailtemplate).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msfp_emailtemplate).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msfp_emailtemplate).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msfp_emailtemplate).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msfp_emailtemplate).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msfp_candelete": (o, n) => { (o as unknown as Msfp_emailtemplate).msfp_candelete = n.getBooleanValue(); },
            "msfp_canedit": (o, n) => { (o as unknown as Msfp_emailtemplate).msfp_canedit = n.getBooleanValue(); },
            "msfp_canrename": (o, n) => { (o as unknown as Msfp_emailtemplate).msfp_canrename = n.getBooleanValue(); },
            "msfp_emailtemplate_AsyncOperations": (o, n) => { (o as unknown as Msfp_emailtemplate).msfp_emailtemplate_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msfp_emailtemplate_BulkDeleteFailures": (o, n) => { (o as unknown as Msfp_emailtemplate).msfp_emailtemplate_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msfp_emailtemplate_MailboxTrackingFolders": (o, n) => { (o as unknown as Msfp_emailtemplate).msfp_emailtemplate_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msfp_emailtemplate_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msfp_emailtemplate).msfp_emailtemplate_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msfp_emailtemplate_ProcessSession": (o, n) => { (o as unknown as Msfp_emailtemplate).msfp_emailtemplate_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msfp_emailtemplate_SyncErrors": (o, n) => { (o as unknown as Msfp_emailtemplate).msfp_emailtemplate_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msfp_emailtemplatebody": (o, n) => { (o as unknown as Msfp_emailtemplate).msfp_emailtemplatebody = n.getStringValue(); },
            "msfp_emailtemplateid": (o, n) => { (o as unknown as Msfp_emailtemplate).msfp_emailtemplateid = n.getStringValue(); },
            "msfp_emailtemplatesubject": (o, n) => { (o as unknown as Msfp_emailtemplate).msfp_emailtemplatesubject = n.getStringValue(); },
            "msfp_language": (o, n) => { (o as unknown as Msfp_emailtemplate).msfp_language = n.getStringValue(); },
            "msfp_msfp_emailtemplate_msfp_localizedemailtem": (o, n) => { (o as unknown as Msfp_emailtemplate).msfp_msfp_emailtemplate_msfp_localizedemailtem = n.getCollectionOfObjectValues<Msfp_localizedemailtemplate>(createMsfp_localizedemailtemplateFromDiscriminatorValue); },
            "msfp_msfp_emailtemplate_msfp_surveyreminder_emailtemplate": (o, n) => { (o as unknown as Msfp_emailtemplate).msfp_msfp_emailtemplate_msfp_surveyreminder_emailtemplate = n.getCollectionOfObjectValues<Msfp_surveyreminder>(createMsfp_surveyreminderFromDiscriminatorValue); },
            "msfp_name": (o, n) => { (o as unknown as Msfp_emailtemplate).msfp_name = n.getStringValue(); },
            "msfp_sourcesurveyidentifier": (o, n) => { (o as unknown as Msfp_emailtemplate).msfp_sourcesurveyidentifier = n.getStringValue(); },
            "msfp_survey": (o, n) => { (o as unknown as Msfp_emailtemplate).msfp_survey = n.getObjectValue<Msfp_survey>(createMsfp_surveyFromDiscriminatorValue); },
            "msfp_tags": (o, n) => { (o as unknown as Msfp_emailtemplate).msfp_tags = n.getStringValue(); },
            "msfp_templatetype": (o, n) => { (o as unknown as Msfp_emailtemplate).msfp_templatetype = n.getNumberValue(); },
            "msfp_version": (o, n) => { (o as unknown as Msfp_emailtemplate).msfp_version = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msfp_emailtemplate).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msfp_emailtemplate).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msfp_emailtemplate).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msfp_emailtemplate).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msfp_emailtemplate).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msfp_emailtemplate).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msfp_emailtemplate).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msfp_emailtemplate).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msfp_emailtemplate).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msfp_emailtemplate).versionnumber = n.getNumberValue(); },
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
     * Gets the msfp_candelete property value. 
     * @returns a boolean
     */
    public get msfp_candelete() {
        return this._msfp_candelete;
    };
    /**
     * Sets the msfp_candelete property value. 
     * @param value Value to set for the msfp_candelete property.
     */
    public set msfp_candelete(value: boolean | undefined) {
        this._msfp_candelete = value;
    };
    /**
     * Gets the msfp_canedit property value. 
     * @returns a boolean
     */
    public get msfp_canedit() {
        return this._msfp_canedit;
    };
    /**
     * Sets the msfp_canedit property value. 
     * @param value Value to set for the msfp_canedit property.
     */
    public set msfp_canedit(value: boolean | undefined) {
        this._msfp_canedit = value;
    };
    /**
     * Gets the msfp_canrename property value. 
     * @returns a boolean
     */
    public get msfp_canrename() {
        return this._msfp_canrename;
    };
    /**
     * Sets the msfp_canrename property value. 
     * @param value Value to set for the msfp_canrename property.
     */
    public set msfp_canrename(value: boolean | undefined) {
        this._msfp_canrename = value;
    };
    /**
     * Gets the msfp_emailtemplate_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msfp_emailtemplate_AsyncOperations() {
        return this._msfp_emailtemplate_AsyncOperations;
    };
    /**
     * Sets the msfp_emailtemplate_AsyncOperations property value. 
     * @param value Value to set for the msfp_emailtemplate_AsyncOperations property.
     */
    public set msfp_emailtemplate_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msfp_emailtemplate_AsyncOperations = value;
    };
    /**
     * Gets the msfp_emailtemplate_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msfp_emailtemplate_BulkDeleteFailures() {
        return this._msfp_emailtemplate_BulkDeleteFailures;
    };
    /**
     * Sets the msfp_emailtemplate_BulkDeleteFailures property value. 
     * @param value Value to set for the msfp_emailtemplate_BulkDeleteFailures property.
     */
    public set msfp_emailtemplate_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msfp_emailtemplate_BulkDeleteFailures = value;
    };
    /**
     * Gets the msfp_emailtemplate_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msfp_emailtemplate_MailboxTrackingFolders() {
        return this._msfp_emailtemplate_MailboxTrackingFolders;
    };
    /**
     * Sets the msfp_emailtemplate_MailboxTrackingFolders property value. 
     * @param value Value to set for the msfp_emailtemplate_MailboxTrackingFolders property.
     */
    public set msfp_emailtemplate_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msfp_emailtemplate_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msfp_emailtemplate_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msfp_emailtemplate_PrincipalObjectAttributeAccesses() {
        return this._msfp_emailtemplate_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msfp_emailtemplate_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msfp_emailtemplate_PrincipalObjectAttributeAccesses property.
     */
    public set msfp_emailtemplate_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msfp_emailtemplate_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msfp_emailtemplate_ProcessSession property value. 
     * @returns a processsession
     */
    public get msfp_emailtemplate_ProcessSession() {
        return this._msfp_emailtemplate_ProcessSession;
    };
    /**
     * Sets the msfp_emailtemplate_ProcessSession property value. 
     * @param value Value to set for the msfp_emailtemplate_ProcessSession property.
     */
    public set msfp_emailtemplate_ProcessSession(value: Processsession[] | undefined) {
        this._msfp_emailtemplate_ProcessSession = value;
    };
    /**
     * Gets the msfp_emailtemplate_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msfp_emailtemplate_SyncErrors() {
        return this._msfp_emailtemplate_SyncErrors;
    };
    /**
     * Sets the msfp_emailtemplate_SyncErrors property value. 
     * @param value Value to set for the msfp_emailtemplate_SyncErrors property.
     */
    public set msfp_emailtemplate_SyncErrors(value: Syncerror[] | undefined) {
        this._msfp_emailtemplate_SyncErrors = value;
    };
    /**
     * Gets the msfp_emailtemplatebody property value. 
     * @returns a string
     */
    public get msfp_emailtemplatebody() {
        return this._msfp_emailtemplatebody;
    };
    /**
     * Sets the msfp_emailtemplatebody property value. 
     * @param value Value to set for the msfp_emailtemplatebody property.
     */
    public set msfp_emailtemplatebody(value: string | undefined) {
        this._msfp_emailtemplatebody = value;
    };
    /**
     * Gets the msfp_emailtemplateid property value. 
     * @returns a string
     */
    public get msfp_emailtemplateid() {
        return this._msfp_emailtemplateid;
    };
    /**
     * Sets the msfp_emailtemplateid property value. 
     * @param value Value to set for the msfp_emailtemplateid property.
     */
    public set msfp_emailtemplateid(value: string | undefined) {
        this._msfp_emailtemplateid = value;
    };
    /**
     * Gets the msfp_emailtemplatesubject property value. 
     * @returns a string
     */
    public get msfp_emailtemplatesubject() {
        return this._msfp_emailtemplatesubject;
    };
    /**
     * Sets the msfp_emailtemplatesubject property value. 
     * @param value Value to set for the msfp_emailtemplatesubject property.
     */
    public set msfp_emailtemplatesubject(value: string | undefined) {
        this._msfp_emailtemplatesubject = value;
    };
    /**
     * Gets the msfp_language property value. 
     * @returns a string
     */
    public get msfp_language() {
        return this._msfp_language;
    };
    /**
     * Sets the msfp_language property value. 
     * @param value Value to set for the msfp_language property.
     */
    public set msfp_language(value: string | undefined) {
        this._msfp_language = value;
    };
    /**
     * Gets the msfp_msfp_emailtemplate_msfp_localizedemailtem property value. 
     * @returns a msfp_localizedemailtemplate
     */
    public get msfp_msfp_emailtemplate_msfp_localizedemailtem() {
        return this._msfp_msfp_emailtemplate_msfp_localizedemailtem;
    };
    /**
     * Sets the msfp_msfp_emailtemplate_msfp_localizedemailtem property value. 
     * @param value Value to set for the msfp_msfp_emailtemplate_msfp_localizedemailtem property.
     */
    public set msfp_msfp_emailtemplate_msfp_localizedemailtem(value: Msfp_localizedemailtemplate[] | undefined) {
        this._msfp_msfp_emailtemplate_msfp_localizedemailtem = value;
    };
    /**
     * Gets the msfp_msfp_emailtemplate_msfp_surveyreminder_emailtemplate property value. 
     * @returns a msfp_surveyreminder
     */
    public get msfp_msfp_emailtemplate_msfp_surveyreminder_emailtemplate() {
        return this._msfp_msfp_emailtemplate_msfp_surveyreminder_emailtemplate;
    };
    /**
     * Sets the msfp_msfp_emailtemplate_msfp_surveyreminder_emailtemplate property value. 
     * @param value Value to set for the msfp_msfp_emailtemplate_msfp_surveyreminder_emailtemplate property.
     */
    public set msfp_msfp_emailtemplate_msfp_surveyreminder_emailtemplate(value: Msfp_surveyreminder[] | undefined) {
        this._msfp_msfp_emailtemplate_msfp_surveyreminder_emailtemplate = value;
    };
    /**
     * Gets the msfp_name property value. 
     * @returns a string
     */
    public get msfp_name() {
        return this._msfp_name;
    };
    /**
     * Sets the msfp_name property value. 
     * @param value Value to set for the msfp_name property.
     */
    public set msfp_name(value: string | undefined) {
        this._msfp_name = value;
    };
    /**
     * Gets the msfp_sourcesurveyidentifier property value. 
     * @returns a string
     */
    public get msfp_sourcesurveyidentifier() {
        return this._msfp_sourcesurveyidentifier;
    };
    /**
     * Sets the msfp_sourcesurveyidentifier property value. 
     * @param value Value to set for the msfp_sourcesurveyidentifier property.
     */
    public set msfp_sourcesurveyidentifier(value: string | undefined) {
        this._msfp_sourcesurveyidentifier = value;
    };
    /**
     * Gets the msfp_survey property value. 
     * @returns a msfp_survey
     */
    public get msfp_survey() {
        return this._msfp_survey;
    };
    /**
     * Sets the msfp_survey property value. 
     * @param value Value to set for the msfp_survey property.
     */
    public set msfp_survey(value: Msfp_survey | undefined) {
        this._msfp_survey = value;
    };
    /**
     * Gets the msfp_tags property value. 
     * @returns a string
     */
    public get msfp_tags() {
        return this._msfp_tags;
    };
    /**
     * Sets the msfp_tags property value. 
     * @param value Value to set for the msfp_tags property.
     */
    public set msfp_tags(value: string | undefined) {
        this._msfp_tags = value;
    };
    /**
     * Gets the msfp_templatetype property value. 
     * @returns a integer
     */
    public get msfp_templatetype() {
        return this._msfp_templatetype;
    };
    /**
     * Sets the msfp_templatetype property value. 
     * @param value Value to set for the msfp_templatetype property.
     */
    public set msfp_templatetype(value: number | undefined) {
        this._msfp_templatetype = value;
    };
    /**
     * Gets the msfp_version property value. 
     * @returns a string
     */
    public get msfp_version() {
        return this._msfp_version;
    };
    /**
     * Sets the msfp_version property value. 
     * @param value Value to set for the msfp_version property.
     */
    public set msfp_version(value: string | undefined) {
        this._msfp_version = value;
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
        writer.writeStringValue("_msfp_survey_value", this._msfp_survey_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeBooleanValue("msfp_candelete", this.msfp_candelete);
        writer.writeBooleanValue("msfp_canedit", this.msfp_canedit);
        writer.writeBooleanValue("msfp_canrename", this.msfp_canrename);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msfp_emailtemplate_AsyncOperations", this.msfp_emailtemplate_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msfp_emailtemplate_BulkDeleteFailures", this.msfp_emailtemplate_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msfp_emailtemplate_MailboxTrackingFolders", this.msfp_emailtemplate_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msfp_emailtemplate_PrincipalObjectAttributeAccesses", this.msfp_emailtemplate_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msfp_emailtemplate_ProcessSession", this.msfp_emailtemplate_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msfp_emailtemplate_SyncErrors", this.msfp_emailtemplate_SyncErrors);
        writer.writeStringValue("msfp_emailtemplatebody", this.msfp_emailtemplatebody);
        writer.writeStringValue("msfp_emailtemplateid", this.msfp_emailtemplateid);
        writer.writeStringValue("msfp_emailtemplatesubject", this.msfp_emailtemplatesubject);
        writer.writeStringValue("msfp_language", this.msfp_language);
        writer.writeCollectionOfObjectValues<Msfp_localizedemailtemplate>("msfp_msfp_emailtemplate_msfp_localizedemailtem", this.msfp_msfp_emailtemplate_msfp_localizedemailtem);
        writer.writeCollectionOfObjectValues<Msfp_surveyreminder>("msfp_msfp_emailtemplate_msfp_surveyreminder_emailtemplate", this.msfp_msfp_emailtemplate_msfp_surveyreminder_emailtemplate);
        writer.writeStringValue("msfp_name", this.msfp_name);
        writer.writeStringValue("msfp_sourcesurveyidentifier", this.msfp_sourcesurveyidentifier);
        writer.writeObjectValue<Msfp_survey>("msfp_survey", this.msfp_survey);
        writer.writeStringValue("msfp_tags", this.msfp_tags);
        writer.writeNumberValue("msfp_templatetype", this.msfp_templatetype);
        writer.writeStringValue("msfp_version", this.msfp_version);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
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

import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createContactFromDiscriminatorValue} from './createContactFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createFeedbackFromDiscriminatorValue} from './createFeedbackFromDiscriminatorValue';
import {createIncidentFromDiscriminatorValue} from './createIncidentFromDiscriminatorValue';
import {createKnowledgearticleFromDiscriminatorValue} from './createKnowledgearticleFromDiscriminatorValue';
import {createMsdyn_liveconversationFromDiscriminatorValue} from './createMsdyn_liveconversationFromDiscriminatorValue';
import {createMsdyn_ocliveworkitemFromDiscriminatorValue} from './createMsdyn_ocliveworkitemFromDiscriminatorValue';
import {createMsdyn_ocoutboundmessageFromDiscriminatorValue} from './createMsdyn_ocoutboundmessageFromDiscriminatorValue';
import {createMsdyn_ocsessionFromDiscriminatorValue} from './createMsdyn_ocsessionFromDiscriminatorValue';
import {createMsfp_alertFromDiscriminatorValue} from './createMsfp_alertFromDiscriminatorValue';
import {createMsfp_surveyinviteFromDiscriminatorValue} from './createMsfp_surveyinviteFromDiscriminatorValue';
import {createMsfp_surveyresponseFromDiscriminatorValue} from './createMsfp_surveyresponseFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {Businessunit, Contact, Crmbaseentity, Duplicaterecord, Incident, Knowledgearticle, Msdyn_liveconversation, Msdyn_ocliveworkitem, Msdyn_ocoutboundmessage, Msdyn_ocsession, Msfp_alert, Msfp_surveyinvite, Msfp_surveyresponse, Principal, Principalobjectattributeaccess, Syncerror, Systemuser, Transactioncurrency} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Feedback extends Crmbaseentity implements Parsable {
    private __closedby_value?: string | undefined;
    private __createdby_value?: string | undefined;
    private __createdbycontact_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __createdonbehalfbycontact_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_contextobjectid_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private __regardingobjectid_value?: string | undefined;
    private __transactioncurrencyid_value?: string | undefined;
    private _closedby?: Systemuser | undefined;
    private _closedon?: Date | undefined;
    private _comments?: string | undefined;
    private _contactId?: Contact | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdByContact?: Contact | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _createdOnBehalfByContact?: Contact | undefined;
    private _exchangerate?: number | undefined;
    private _feedback_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _feedback_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _feedback_feedback?: Feedback[] | undefined;
    private _feedback_principalobjectattributeaccess?: Principalobjectattributeaccess[] | undefined;
    private _feedback_SyncErrors?: Syncerror[] | undefined;
    private _feedbackid?: string | undefined;
    private _importsequencenumber?: number | undefined;
    private _knowledgeArticleId?: Knowledgearticle | undefined;
    private _maxrating?: number | undefined;
    private _minrating?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedOnBehalfBy?: Systemuser | undefined;
    private _msdyn_ContextObjectId_incident?: Incident | undefined;
    private _msdyn_ContextObjectId_knowledgearticle?: Knowledgearticle | undefined;
    private _normalizedrating?: number | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _rating?: number | undefined;
    private _regardingobjectid_msdyn_liveconversation?: Msdyn_liveconversation | undefined;
    private _regardingobjectid_msdyn_ocliveworkitem?: Msdyn_ocliveworkitem | undefined;
    private _regardingobjectid_msdyn_ocoutboundmessage?: Msdyn_ocoutboundmessage | undefined;
    private _regardingobjectid_msdyn_ocsession?: Msdyn_ocsession | undefined;
    private _regardingobjectid_msfp_alert?: Msfp_alert | undefined;
    private _regardingobjectid_msfp_surveyinvite?: Msfp_surveyinvite | undefined;
    private _regardingobjectid_msfp_surveyresponse?: Msfp_surveyresponse | undefined;
    private _source?: number | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _title?: string | undefined;
    private _transactioncurrencyid?: Transactioncurrency | undefined;
    private _versionnumber?: number | undefined;
    /**
     * Gets the _closedby_value property value. 
     * @returns a string
     */
    public get _closedby_value() {
        return this.__closedby_value;
    };
    /**
     * Sets the _closedby_value property value. 
     * @param value Value to set for the _closedby_value property.
     */
    public set _closedby_value(value: string | undefined) {
        this.__closedby_value = value;
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
     * Gets the _createdbycontact_value property value. 
     * @returns a string
     */
    public get _createdbycontact_value() {
        return this.__createdbycontact_value;
    };
    /**
     * Sets the _createdbycontact_value property value. 
     * @param value Value to set for the _createdbycontact_value property.
     */
    public set _createdbycontact_value(value: string | undefined) {
        this.__createdbycontact_value = value;
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
     * Gets the _createdonbehalfbycontact_value property value. 
     * @returns a string
     */
    public get _createdonbehalfbycontact_value() {
        return this.__createdonbehalfbycontact_value;
    };
    /**
     * Sets the _createdonbehalfbycontact_value property value. 
     * @param value Value to set for the _createdonbehalfbycontact_value property.
     */
    public set _createdonbehalfbycontact_value(value: string | undefined) {
        this.__createdonbehalfbycontact_value = value;
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
     * Gets the _msdyn_contextobjectid_value property value. 
     * @returns a string
     */
    public get _msdyn_contextobjectid_value() {
        return this.__msdyn_contextobjectid_value;
    };
    /**
     * Sets the _msdyn_contextobjectid_value property value. 
     * @param value Value to set for the _msdyn_contextobjectid_value property.
     */
    public set _msdyn_contextobjectid_value(value: string | undefined) {
        this.__msdyn_contextobjectid_value = value;
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
     * Gets the _transactioncurrencyid_value property value. 
     * @returns a string
     */
    public get _transactioncurrencyid_value() {
        return this.__transactioncurrencyid_value;
    };
    /**
     * Sets the _transactioncurrencyid_value property value. 
     * @param value Value to set for the _transactioncurrencyid_value property.
     */
    public set _transactioncurrencyid_value(value: string | undefined) {
        this.__transactioncurrencyid_value = value;
    };
    /**
     * Gets the closedby property value. 
     * @returns a systemuser
     */
    public get closedby() {
        return this._closedby;
    };
    /**
     * Sets the closedby property value. 
     * @param value Value to set for the closedby property.
     */
    public set closedby(value: Systemuser | undefined) {
        this._closedby = value;
    };
    /**
     * Gets the closedon property value. 
     * @returns a Date
     */
    public get closedon() {
        return this._closedon;
    };
    /**
     * Sets the closedon property value. 
     * @param value Value to set for the closedon property.
     */
    public set closedon(value: Date | undefined) {
        this._closedon = value;
    };
    /**
     * Gets the comments property value. 
     * @returns a string
     */
    public get comments() {
        return this._comments;
    };
    /**
     * Sets the comments property value. 
     * @param value Value to set for the comments property.
     */
    public set comments(value: string | undefined) {
        this._comments = value;
    };
    /**
     * Instantiates a new feedback and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the contactId property value. 
     * @returns a contact
     */
    public get contactId() {
        return this._contactId;
    };
    /**
     * Sets the contactId property value. 
     * @param value Value to set for the ContactId property.
     */
    public set contactId(value: Contact | undefined) {
        this._contactId = value;
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
     * Gets the createdByContact property value. 
     * @returns a contact
     */
    public get createdByContact() {
        return this._createdByContact;
    };
    /**
     * Sets the createdByContact property value. 
     * @param value Value to set for the CreatedByContact property.
     */
    public set createdByContact(value: Contact | undefined) {
        this._createdByContact = value;
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
     * Gets the createdOnBehalfByContact property value. 
     * @returns a contact
     */
    public get createdOnBehalfByContact() {
        return this._createdOnBehalfByContact;
    };
    /**
     * Sets the createdOnBehalfByContact property value. 
     * @param value Value to set for the CreatedOnBehalfByContact property.
     */
    public set createdOnBehalfByContact(value: Contact | undefined) {
        this._createdOnBehalfByContact = value;
    };
    /**
     * Gets the exchangerate property value. 
     * @returns a int64
     */
    public get exchangerate() {
        return this._exchangerate;
    };
    /**
     * Sets the exchangerate property value. 
     * @param value Value to set for the exchangerate property.
     */
    public set exchangerate(value: number | undefined) {
        this._exchangerate = value;
    };
    /**
     * Gets the feedback_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get feedback_DuplicateBaseRecord() {
        return this._feedback_DuplicateBaseRecord;
    };
    /**
     * Sets the feedback_DuplicateBaseRecord property value. 
     * @param value Value to set for the feedback_DuplicateBaseRecord property.
     */
    public set feedback_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._feedback_DuplicateBaseRecord = value;
    };
    /**
     * Gets the feedback_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get feedback_DuplicateMatchingRecord() {
        return this._feedback_DuplicateMatchingRecord;
    };
    /**
     * Sets the feedback_DuplicateMatchingRecord property value. 
     * @param value Value to set for the feedback_DuplicateMatchingRecord property.
     */
    public set feedback_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._feedback_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the feedback_feedback property value. 
     * @returns a feedback
     */
    public get feedback_feedback() {
        return this._feedback_feedback;
    };
    /**
     * Sets the feedback_feedback property value. 
     * @param value Value to set for the feedback_feedback property.
     */
    public set feedback_feedback(value: Feedback[] | undefined) {
        this._feedback_feedback = value;
    };
    /**
     * Gets the feedback_principalobjectattributeaccess property value. 
     * @returns a principalobjectattributeaccess
     */
    public get feedback_principalobjectattributeaccess() {
        return this._feedback_principalobjectattributeaccess;
    };
    /**
     * Sets the feedback_principalobjectattributeaccess property value. 
     * @param value Value to set for the feedback_principalobjectattributeaccess property.
     */
    public set feedback_principalobjectattributeaccess(value: Principalobjectattributeaccess[] | undefined) {
        this._feedback_principalobjectattributeaccess = value;
    };
    /**
     * Gets the feedback_SyncErrors property value. 
     * @returns a syncerror
     */
    public get feedback_SyncErrors() {
        return this._feedback_SyncErrors;
    };
    /**
     * Sets the feedback_SyncErrors property value. 
     * @param value Value to set for the Feedback_SyncErrors property.
     */
    public set feedback_SyncErrors(value: Syncerror[] | undefined) {
        this._feedback_SyncErrors = value;
    };
    /**
     * Gets the feedbackid property value. 
     * @returns a string
     */
    public get feedbackid() {
        return this._feedbackid;
    };
    /**
     * Sets the feedbackid property value. 
     * @param value Value to set for the feedbackid property.
     */
    public set feedbackid(value: string | undefined) {
        this._feedbackid = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_closedby_value": (o, n) => { (o as unknown as Feedback)._closedby_value = n.getStringValue(); },
            "_createdby_value": (o, n) => { (o as unknown as Feedback)._createdby_value = n.getStringValue(); },
            "_createdbycontact_value": (o, n) => { (o as unknown as Feedback)._createdbycontact_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Feedback)._createdonbehalfby_value = n.getStringValue(); },
            "_createdonbehalfbycontact_value": (o, n) => { (o as unknown as Feedback)._createdonbehalfbycontact_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Feedback)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Feedback)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_contextobjectid_value": (o, n) => { (o as unknown as Feedback)._msdyn_contextobjectid_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Feedback)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Feedback)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Feedback)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Feedback)._owninguser_value = n.getStringValue(); },
            "_regardingobjectid_value": (o, n) => { (o as unknown as Feedback)._regardingobjectid_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Feedback)._transactioncurrencyid_value = n.getStringValue(); },
            "closedby": (o, n) => { (o as unknown as Feedback).closedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "closedon": (o, n) => { (o as unknown as Feedback).closedon = n.getDateValue(); },
            "comments": (o, n) => { (o as unknown as Feedback).comments = n.getStringValue(); },
            "contactId": (o, n) => { (o as unknown as Feedback).contactId = n.getObjectValue<Contact>(createContactFromDiscriminatorValue); },
            "createdby": (o, n) => { (o as unknown as Feedback).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdByContact": (o, n) => { (o as unknown as Feedback).createdByContact = n.getObjectValue<Contact>(createContactFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Feedback).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Feedback).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdOnBehalfByContact": (o, n) => { (o as unknown as Feedback).createdOnBehalfByContact = n.getObjectValue<Contact>(createContactFromDiscriminatorValue); },
            "exchangerate": (o, n) => { (o as unknown as Feedback).exchangerate = n.getNumberValue(); },
            "feedback_DuplicateBaseRecord": (o, n) => { (o as unknown as Feedback).feedback_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "feedback_DuplicateMatchingRecord": (o, n) => { (o as unknown as Feedback).feedback_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "feedback_feedback": (o, n) => { (o as unknown as Feedback).feedback_feedback = n.getCollectionOfObjectValues<Feedback>(createFeedbackFromDiscriminatorValue); },
            "feedback_principalobjectattributeaccess": (o, n) => { (o as unknown as Feedback).feedback_principalobjectattributeaccess = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "feedback_SyncErrors": (o, n) => { (o as unknown as Feedback).feedback_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "feedbackid": (o, n) => { (o as unknown as Feedback).feedbackid = n.getStringValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Feedback).importsequencenumber = n.getNumberValue(); },
            "knowledgeArticleId": (o, n) => { (o as unknown as Feedback).knowledgeArticleId = n.getObjectValue<Knowledgearticle>(createKnowledgearticleFromDiscriminatorValue); },
            "maxrating": (o, n) => { (o as unknown as Feedback).maxrating = n.getNumberValue(); },
            "minrating": (o, n) => { (o as unknown as Feedback).minrating = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Feedback).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Feedback).modifiedon = n.getDateValue(); },
            "modifiedOnBehalfBy": (o, n) => { (o as unknown as Feedback).modifiedOnBehalfBy = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_ContextObjectId_incident": (o, n) => { (o as unknown as Feedback).msdyn_ContextObjectId_incident = n.getObjectValue<Incident>(createIncidentFromDiscriminatorValue); },
            "msdyn_ContextObjectId_knowledgearticle": (o, n) => { (o as unknown as Feedback).msdyn_ContextObjectId_knowledgearticle = n.getObjectValue<Knowledgearticle>(createKnowledgearticleFromDiscriminatorValue); },
            "normalizedrating": (o, n) => { (o as unknown as Feedback).normalizedrating = n.getNumberValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Feedback).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Feedback).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Feedback).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "rating": (o, n) => { (o as unknown as Feedback).rating = n.getNumberValue(); },
            "regardingobjectid_msdyn_liveconversation": (o, n) => { (o as unknown as Feedback).regardingobjectid_msdyn_liveconversation = n.getObjectValue<Msdyn_liveconversation>(createMsdyn_liveconversationFromDiscriminatorValue); },
            "regardingobjectid_msdyn_ocliveworkitem": (o, n) => { (o as unknown as Feedback).regardingobjectid_msdyn_ocliveworkitem = n.getObjectValue<Msdyn_ocliveworkitem>(createMsdyn_ocliveworkitemFromDiscriminatorValue); },
            "regardingobjectid_msdyn_ocoutboundmessage": (o, n) => { (o as unknown as Feedback).regardingobjectid_msdyn_ocoutboundmessage = n.getObjectValue<Msdyn_ocoutboundmessage>(createMsdyn_ocoutboundmessageFromDiscriminatorValue); },
            "regardingobjectid_msdyn_ocsession": (o, n) => { (o as unknown as Feedback).regardingobjectid_msdyn_ocsession = n.getObjectValue<Msdyn_ocsession>(createMsdyn_ocsessionFromDiscriminatorValue); },
            "regardingobjectid_msfp_alert": (o, n) => { (o as unknown as Feedback).regardingobjectid_msfp_alert = n.getObjectValue<Msfp_alert>(createMsfp_alertFromDiscriminatorValue); },
            "regardingobjectid_msfp_surveyinvite": (o, n) => { (o as unknown as Feedback).regardingobjectid_msfp_surveyinvite = n.getObjectValue<Msfp_surveyinvite>(createMsfp_surveyinviteFromDiscriminatorValue); },
            "regardingobjectid_msfp_surveyresponse": (o, n) => { (o as unknown as Feedback).regardingobjectid_msfp_surveyresponse = n.getObjectValue<Msfp_surveyresponse>(createMsfp_surveyresponseFromDiscriminatorValue); },
            "source": (o, n) => { (o as unknown as Feedback).source = n.getNumberValue(); },
            "statecode": (o, n) => { (o as unknown as Feedback).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Feedback).statuscode = n.getNumberValue(); },
            "title": (o, n) => { (o as unknown as Feedback).title = n.getStringValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Feedback).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "versionnumber": (o, n) => { (o as unknown as Feedback).versionnumber = n.getNumberValue(); },
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
     * Gets the knowledgeArticleId property value. 
     * @returns a knowledgearticle
     */
    public get knowledgeArticleId() {
        return this._knowledgeArticleId;
    };
    /**
     * Sets the knowledgeArticleId property value. 
     * @param value Value to set for the KnowledgeArticleId property.
     */
    public set knowledgeArticleId(value: Knowledgearticle | undefined) {
        this._knowledgeArticleId = value;
    };
    /**
     * Gets the maxrating property value. 
     * @returns a integer
     */
    public get maxrating() {
        return this._maxrating;
    };
    /**
     * Sets the maxrating property value. 
     * @param value Value to set for the maxrating property.
     */
    public set maxrating(value: number | undefined) {
        this._maxrating = value;
    };
    /**
     * Gets the minrating property value. 
     * @returns a integer
     */
    public get minrating() {
        return this._minrating;
    };
    /**
     * Sets the minrating property value. 
     * @param value Value to set for the minrating property.
     */
    public set minrating(value: number | undefined) {
        this._minrating = value;
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
     * Gets the modifiedOnBehalfBy property value. 
     * @returns a systemuser
     */
    public get modifiedOnBehalfBy() {
        return this._modifiedOnBehalfBy;
    };
    /**
     * Sets the modifiedOnBehalfBy property value. 
     * @param value Value to set for the ModifiedOnBehalfBy property.
     */
    public set modifiedOnBehalfBy(value: Systemuser | undefined) {
        this._modifiedOnBehalfBy = value;
    };
    /**
     * Gets the msdyn_ContextObjectId_incident property value. 
     * @returns a incident
     */
    public get msdyn_ContextObjectId_incident() {
        return this._msdyn_ContextObjectId_incident;
    };
    /**
     * Sets the msdyn_ContextObjectId_incident property value. 
     * @param value Value to set for the msdyn_ContextObjectId_incident property.
     */
    public set msdyn_ContextObjectId_incident(value: Incident | undefined) {
        this._msdyn_ContextObjectId_incident = value;
    };
    /**
     * Gets the msdyn_ContextObjectId_knowledgearticle property value. 
     * @returns a knowledgearticle
     */
    public get msdyn_ContextObjectId_knowledgearticle() {
        return this._msdyn_ContextObjectId_knowledgearticle;
    };
    /**
     * Sets the msdyn_ContextObjectId_knowledgearticle property value. 
     * @param value Value to set for the msdyn_ContextObjectId_knowledgearticle property.
     */
    public set msdyn_ContextObjectId_knowledgearticle(value: Knowledgearticle | undefined) {
        this._msdyn_ContextObjectId_knowledgearticle = value;
    };
    /**
     * Gets the normalizedrating property value. 
     * @returns a int64
     */
    public get normalizedrating() {
        return this._normalizedrating;
    };
    /**
     * Sets the normalizedrating property value. 
     * @param value Value to set for the normalizedrating property.
     */
    public set normalizedrating(value: number | undefined) {
        this._normalizedrating = value;
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
     * Gets the rating property value. 
     * @returns a integer
     */
    public get rating() {
        return this._rating;
    };
    /**
     * Sets the rating property value. 
     * @param value Value to set for the rating property.
     */
    public set rating(value: number | undefined) {
        this._rating = value;
    };
    /**
     * Gets the regardingobjectid_msdyn_liveconversation property value. 
     * @returns a msdyn_liveconversation
     */
    public get regardingobjectid_msdyn_liveconversation() {
        return this._regardingobjectid_msdyn_liveconversation;
    };
    /**
     * Sets the regardingobjectid_msdyn_liveconversation property value. 
     * @param value Value to set for the regardingobjectid_msdyn_liveconversation property.
     */
    public set regardingobjectid_msdyn_liveconversation(value: Msdyn_liveconversation | undefined) {
        this._regardingobjectid_msdyn_liveconversation = value;
    };
    /**
     * Gets the regardingobjectid_msdyn_ocliveworkitem property value. 
     * @returns a msdyn_ocliveworkitem
     */
    public get regardingobjectid_msdyn_ocliveworkitem() {
        return this._regardingobjectid_msdyn_ocliveworkitem;
    };
    /**
     * Sets the regardingobjectid_msdyn_ocliveworkitem property value. 
     * @param value Value to set for the regardingobjectid_msdyn_ocliveworkitem property.
     */
    public set regardingobjectid_msdyn_ocliveworkitem(value: Msdyn_ocliveworkitem | undefined) {
        this._regardingobjectid_msdyn_ocliveworkitem = value;
    };
    /**
     * Gets the regardingobjectid_msdyn_ocoutboundmessage property value. 
     * @returns a msdyn_ocoutboundmessage
     */
    public get regardingobjectid_msdyn_ocoutboundmessage() {
        return this._regardingobjectid_msdyn_ocoutboundmessage;
    };
    /**
     * Sets the regardingobjectid_msdyn_ocoutboundmessage property value. 
     * @param value Value to set for the regardingobjectid_msdyn_ocoutboundmessage property.
     */
    public set regardingobjectid_msdyn_ocoutboundmessage(value: Msdyn_ocoutboundmessage | undefined) {
        this._regardingobjectid_msdyn_ocoutboundmessage = value;
    };
    /**
     * Gets the regardingobjectid_msdyn_ocsession property value. 
     * @returns a msdyn_ocsession
     */
    public get regardingobjectid_msdyn_ocsession() {
        return this._regardingobjectid_msdyn_ocsession;
    };
    /**
     * Sets the regardingobjectid_msdyn_ocsession property value. 
     * @param value Value to set for the regardingobjectid_msdyn_ocsession property.
     */
    public set regardingobjectid_msdyn_ocsession(value: Msdyn_ocsession | undefined) {
        this._regardingobjectid_msdyn_ocsession = value;
    };
    /**
     * Gets the regardingobjectid_msfp_alert property value. 
     * @returns a msfp_alert
     */
    public get regardingobjectid_msfp_alert() {
        return this._regardingobjectid_msfp_alert;
    };
    /**
     * Sets the regardingobjectid_msfp_alert property value. 
     * @param value Value to set for the regardingobjectid_msfp_alert property.
     */
    public set regardingobjectid_msfp_alert(value: Msfp_alert | undefined) {
        this._regardingobjectid_msfp_alert = value;
    };
    /**
     * Gets the regardingobjectid_msfp_surveyinvite property value. 
     * @returns a msfp_surveyinvite
     */
    public get regardingobjectid_msfp_surveyinvite() {
        return this._regardingobjectid_msfp_surveyinvite;
    };
    /**
     * Sets the regardingobjectid_msfp_surveyinvite property value. 
     * @param value Value to set for the regardingobjectid_msfp_surveyinvite property.
     */
    public set regardingobjectid_msfp_surveyinvite(value: Msfp_surveyinvite | undefined) {
        this._regardingobjectid_msfp_surveyinvite = value;
    };
    /**
     * Gets the regardingobjectid_msfp_surveyresponse property value. 
     * @returns a msfp_surveyresponse
     */
    public get regardingobjectid_msfp_surveyresponse() {
        return this._regardingobjectid_msfp_surveyresponse;
    };
    /**
     * Sets the regardingobjectid_msfp_surveyresponse property value. 
     * @param value Value to set for the regardingobjectid_msfp_surveyresponse property.
     */
    public set regardingobjectid_msfp_surveyresponse(value: Msfp_surveyresponse | undefined) {
        this._regardingobjectid_msfp_surveyresponse = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_closedby_value", this._closedby_value);
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdbycontact_value", this._createdbycontact_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_createdonbehalfbycontact_value", this._createdonbehalfbycontact_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_msdyn_contextobjectid_value", this._msdyn_contextobjectid_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeStringValue("_regardingobjectid_value", this._regardingobjectid_value);
        writer.writeStringValue("_transactioncurrencyid_value", this._transactioncurrencyid_value);
        writer.writeObjectValue<Systemuser>("closedby", this.closedby);
        writer.writeDateValue("closedon", this.closedon);
        writer.writeStringValue("comments", this.comments);
        writer.writeObjectValue<Contact>("contactId", this.contactId);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeObjectValue<Contact>("createdByContact", this.createdByContact);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeObjectValue<Contact>("createdOnBehalfByContact", this.createdOnBehalfByContact);
        writer.writeNumberValue("exchangerate", this.exchangerate);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("feedback_DuplicateBaseRecord", this.feedback_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("feedback_DuplicateMatchingRecord", this.feedback_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Feedback>("feedback_feedback", this.feedback_feedback);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("feedback_principalobjectattributeaccess", this.feedback_principalobjectattributeaccess);
        writer.writeCollectionOfObjectValues<Syncerror>("feedback_SyncErrors", this.feedback_SyncErrors);
        writer.writeStringValue("feedbackid", this.feedbackid);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Knowledgearticle>("knowledgeArticleId", this.knowledgeArticleId);
        writer.writeNumberValue("maxrating", this.maxrating);
        writer.writeNumberValue("minrating", this.minrating);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedOnBehalfBy", this.modifiedOnBehalfBy);
        writer.writeObjectValue<Incident>("msdyn_ContextObjectId_incident", this.msdyn_ContextObjectId_incident);
        writer.writeObjectValue<Knowledgearticle>("msdyn_ContextObjectId_knowledgearticle", this.msdyn_ContextObjectId_knowledgearticle);
        writer.writeNumberValue("normalizedrating", this.normalizedrating);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeNumberValue("rating", this.rating);
        writer.writeObjectValue<Msdyn_liveconversation>("regardingobjectid_msdyn_liveconversation", this.regardingobjectid_msdyn_liveconversation);
        writer.writeObjectValue<Msdyn_ocliveworkitem>("regardingobjectid_msdyn_ocliveworkitem", this.regardingobjectid_msdyn_ocliveworkitem);
        writer.writeObjectValue<Msdyn_ocoutboundmessage>("regardingobjectid_msdyn_ocoutboundmessage", this.regardingobjectid_msdyn_ocoutboundmessage);
        writer.writeObjectValue<Msdyn_ocsession>("regardingobjectid_msdyn_ocsession", this.regardingobjectid_msdyn_ocsession);
        writer.writeObjectValue<Msfp_alert>("regardingobjectid_msfp_alert", this.regardingobjectid_msfp_alert);
        writer.writeObjectValue<Msfp_surveyinvite>("regardingobjectid_msfp_surveyinvite", this.regardingobjectid_msfp_surveyinvite);
        writer.writeObjectValue<Msfp_surveyresponse>("regardingobjectid_msfp_surveyresponse", this.regardingobjectid_msfp_surveyresponse);
        writer.writeNumberValue("source", this.source);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeStringValue("title", this.title);
        writer.writeObjectValue<Transactioncurrency>("transactioncurrencyid", this.transactioncurrencyid);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the source property value. 
     * @returns a integer
     */
    public get source() {
        return this._source;
    };
    /**
     * Sets the source property value. 
     * @param value Value to set for the source property.
     */
    public set source(value: number | undefined) {
        this._source = value;
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
     * Gets the title property value. 
     * @returns a string
     */
    public get title() {
        return this._title;
    };
    /**
     * Sets the title property value. 
     * @param value Value to set for the title property.
     */
    public set title(value: string | undefined) {
        this._title = value;
    };
    /**
     * Gets the transactioncurrencyid property value. 
     * @returns a transactioncurrency
     */
    public get transactioncurrencyid() {
        return this._transactioncurrencyid;
    };
    /**
     * Sets the transactioncurrencyid property value. 
     * @param value Value to set for the transactioncurrencyid property.
     */
    public set transactioncurrencyid(value: Transactioncurrency | undefined) {
        this._transactioncurrencyid = value;
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
